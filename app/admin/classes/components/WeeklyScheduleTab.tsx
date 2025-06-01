"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { format, addDays, startOfWeek, endOfWeek } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, Edit, Trash2, Users, Clock, PlusCircle, Calendar } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import {
  type ClassType,
  type Instructor,
  type ScheduledClass,
  timeSlots,
  weekDays,
  convertUtcToLocalDateForDisplay,
  formatTime as importedFormatTime,
} from "../typesAndConstants"

interface WeeklyScheduleTabProps {
  selectedWeek: Date
  setSelectedWeek: (date: Date) => void
  scheduledClasses: ScheduledClass[]
  loadScheduledClasses: () => Promise<void>
  instructors: Instructor[]
  classTypes: ClassType[]
  onOpenNewScheduleDialog: () => void
  onOpenMultiScheduleDialog: () => void // Nueva prop
  onOpenEditScheduleDialog: (schedule: ScheduledClass) => void
  onDeleteSchedule: (scheduleId: number) => Promise<void>
}

export default function WeeklyScheduleTab({
  selectedWeek,
  setSelectedWeek,
  scheduledClasses,
  loadScheduledClasses,
  instructors,
  classTypes,
  onOpenNewScheduleDialog,
  onOpenMultiScheduleDialog, // Nueva prop
  onOpenEditScheduleDialog,
  onDeleteSchedule,
}: WeeklyScheduleTabProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  // Derived date calculations
  const currentWeekStart = startOfWeek(selectedWeek, { weekStartsOn: 1 })
  const currentWeekEnd = endOfWeek(selectedWeek, { weekStartsOn: 1 })

  const formatTime = importedFormatTime

  // Get classes for day function
  const getClassesForDay = (dayOffset: number) => {
    const targetDate = addDays(currentWeekStart, dayOffset)
    const targetDateString = format(targetDate, "yyyy-MM-dd")

    return scheduledClasses.filter((cls) => {
      const classDateForDisplay = convertUtcToLocalDateForDisplay(cls.date)
      const classDateString = format(classDateForDisplay, "yyyy-MM-dd")
      return classDateString === targetDateString
    })
  }

  return (
    <div>
      {/* Week Navigation and Buttons */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#4A102A]">
            Semana del {format(currentWeekStart, "d", { locale: es })} al{" "}
            {format(currentWeekEnd, "d 'de' MMMM yyyy", { locale: es })}
          </h2>
          <p className="text-gray-600 text-sm">{scheduledClasses.length} clase(s) programada(s) esta semana</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            onClick={() => setSelectedWeek(addDays(selectedWeek, -7))}
            className="border-gray-200 text-zinc-900 hover:bg-gray-100"
          >
            ← Anterior
          </Button>
          <Button
            variant="outline"
            onClick={() => setSelectedWeek(addDays(selectedWeek, 7))}
            className="border-gray-200 text-zinc-900 hover:bg-gray-100"
          >
            Siguiente →
          </Button>
          <Button className="bg-[#4A102A] hover:bg-[#85193C] text-white" onClick={onOpenNewScheduleDialog}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Nueva Clase
          </Button>
          <Button
            variant="outline"
            className="border-[#4A102A] text-[#4A102A] hover:bg-[#4A102A] hover:text-white"
            onClick={onOpenMultiScheduleDialog}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Programar Múltiples
          </Button>
        </div>
      </div>

      {/* Schedule Grid */}
      <Card className="bg-white border-gray-200">
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Header Row */}
              <div className="grid grid-cols-8 gap-2 mb-4">
                <div className="bg-gray-100 p-4 font-bold text-center text-[#4A102A] rounded-lg">Hora</div>
                {weekDays.map((day, index) => (
                  <div key={day.key} className="bg-gray-100 p-4 font-bold text-center text-[#4A102A] rounded-lg">
                    <div>{day.label}</div>
                    <div className="text-sm font-normal text-gray-600">
                      {format(addDays(currentWeekStart, index), "d/M")}
                    </div>
                  </div>
                ))}
              </div>

              {/* Time Slots */}
              {timeSlots.map((time) => (
                <div key={time} className="grid grid-cols-8 gap-2 mb-2">
                  <div className="bg-gray-50 p-4 flex items-center justify-center text-gray-700 rounded-lg font-medium">
                    {time}
                  </div>
                  {weekDays.map((day, dayIndex) => {
                    const dayClasses = getClassesForDay(dayIndex).filter((cls) => formatTime(cls.time) === time)
                    return (
                      <div
                        key={`${day.key}-${time}`}
                        className={`p-2 rounded-lg min-h-[80px] transition-colors ${
                          dayClasses.length > 0
                            ? "bg-white border border-gray-200 shadow-sm hover:shadow-md"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        {dayClasses.map((cls) => (
                          <div key={cls.id} className="relative group h-full">
                            <div className="text-center p-1">
                              <p className="font-bold text-sm text-[#4A102A] mb-1 leading-tight">
                                {cls.classType.name}
                              </p>
                              <p className="text-xs text-gray-600 mb-1">
                                {cls.instructor.user.firstName} {cls.instructor.user.lastName}
                              </p>
                              <div className="flex items-center justify-center gap-1 text-xs text-gray-600 mb-1">
                                <Users className="h-3 w-3" />
                                <span>
                                  {cls.maxCapacity - cls.availableSpots}/{cls.maxCapacity}
                                </span>
                                <Clock className="h-3 w-3 ml-1" />
                                <span>{cls.classType.duration}min</span>
                              </div>
                              {cls.waitlist.length > 0 && (
                                <p className="text-xs text-orange-600 font-medium">Lista: {cls.waitlist.length}</p>
                              )}
                              {cls.availableSpots === 0 && (
                                <div className="text-xs bg-red-100 text-red-700 px-1 py-0.5 rounded mt-1">Lleno</div>
                              )}
                            </div>

                            {/* Action Buttons - Show on Hover */}
                            <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded shadow-sm">
                              <div className="flex gap-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6 text-gray-400 hover:text-[#4A102A]"
                                  onClick={() => onOpenEditScheduleDialog(cls)}
                                  title="Editar clase"
                                >
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6 text-gray-400 hover:text-[#C5172E]"
                                  onClick={() => onDeleteSchedule(cls.id)}
                                  title="Eliminar clase"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {scheduledClasses.length === 0 && (
            <div className="text-center py-12">
              <CalendarIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No hay clases programadas</h3>
              <p className="text-gray-500 mb-4">Comienza programando tu primera clase para esta semana</p>
              <div className="flex justify-center gap-2">
                <Button onClick={onOpenNewScheduleDialog} className="bg-[#4A102A] hover:bg-[#85193C] text-white">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Programar Primera Clase
                </Button>
                <Button
                  variant="outline"
                  onClick={onOpenMultiScheduleDialog}
                  className="border-[#4A102A] text-[#4A102A] hover:bg-[#4A102A] hover:text-white"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Programar Múltiples
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
