"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { format, isSameDay } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, Edit, Trash2, Users, Clock, List, Grid3X3 } from "lucide-react"
import {
  type ScheduledClass,
  type ClassType,
  type Instructor,
  convertUtcToLocalDateForDisplay,
  formatTime,
} from "../typesAndConstants"

interface CalendarViewTabProps {
  scheduledClasses: ScheduledClass[]
  date: Date | undefined
  setDate: (date: Date | undefined) => void
  setSelectedWeek: (date: Date) => void
  onOpenEditScheduleDialog: (schedule: ScheduledClass) => void
  onDeleteSchedule: (scheduleId: number) => Promise<void>
  classTypes: ClassType[]
  instructors: Instructor[]
}

export default function CalendarViewTab({
  scheduledClasses,
  date,
  setDate,
  setSelectedWeek,
  onOpenEditScheduleDialog,
  onDeleteSchedule,
  classTypes,
  instructors,
}: CalendarViewTabProps) {
  const [viewMode, setViewMode] = useState<"calendar" | "list">("calendar")

  // Obtener clases para una fecha específica
  const getClassesForDate = (targetDate: Date) => {
    return scheduledClasses
      .filter((cls) => {
        const classDate = convertUtcToLocalDateForDisplay(cls.date)
        return isSameDay(classDate, targetDate)
      })
      .sort((a, b) => formatTime(a.time).localeCompare(formatTime(b.time)))
  }

  // Obtener fechas que tienen clases programadas
  const getDatesWithClasses = () => {
    return scheduledClasses.map((cls) => convertUtcToLocalDateForDisplay(cls.date))
  }

  const selectedDate = date || new Date()
  const classesForSelectedDate = date ? getClassesForDate(selectedDate) : []
  const datesWithClasses = getDatesWithClasses()

  const filteredClasses = date ? classesForSelectedDate : scheduledClasses
  const noClassesForSelectedDate = date && classesForSelectedDate.length === 0
  const noClassesAtAll = scheduledClasses.length === 0

  return (
    <div className="space-y-6">
      {/* Header con controles mejorados */}
      <Card className="bg-white border-gray-200">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle className="text-[#4A102A] text-xl">Vista de Calendario</CardTitle>
              <CardDescription className="text-gray-600">
                {date
                  ? `Clases para el ${format(selectedDate, "EEEE, d 'de' MMMM", { locale: es })}`
                  : `${scheduledClasses.length} clases programadas en total`}
              </CardDescription>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Toggle de vista */}
              <div className="flex items-center border border-gray-200 rounded-lg p-1">
                <Button
                  variant={viewMode === "calendar" ? "default" : "ghost"}
                  onClick={() => setViewMode("calendar")}
                  className={`h-8 px-3 ${viewMode === "calendar" ? "bg-[#4A102A] text-white" : ""}`}
                  size="sm"
                >
                  <Grid3X3 className="h-4 w-4 mr-1" />
                  Calendario
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  onClick={() => setViewMode("list")}
                  className={`h-8 px-3 ${viewMode === "list" ? "bg-[#4A102A] text-white" : ""}`}
                  size="sm"
                >
                  <List className="h-4 w-4 mr-1" />
                  Lista
                </Button>
              </div>

              {/* Botones de navegación rápida */}
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-200 text-zinc-900 hover:bg-gray-100"
                  onClick={() => {
                    const today = new Date()
                    setDate(today)
                    setSelectedWeek(today)
                  }}
                >
                  Hoy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-200 text-zinc-900 hover:bg-gray-100"
                  onClick={() => {
                    const tomorrow = new Date()
                    tomorrow.setDate(tomorrow.getDate() + 1)
                    setDate(tomorrow)
                    setSelectedWeek(tomorrow)
                  }}
                >
                  Mañana
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-200 text-zinc-900 hover:bg-gray-100"
                  onClick={() => setDate(undefined)}
                >
                  Ver todas
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panel principal - Calendario o Lista */}
        <div className="lg:col-span-2">
          {viewMode === "calendar" ? (
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    if (newDate) {
                      setDate(newDate)
                      setSelectedWeek(newDate)
                    }
                  }}
                  locale={es}
                  className="rounded-md border-0 mx-auto"
                  modifiers={{
                    hasClasses: datesWithClasses,
                  }}
                  modifiersStyles={{
                    hasClasses: {
                      backgroundColor: "#4A102A",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                />
                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#4A102A] rounded"></div>
                    <span>Días con clases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-200 rounded"></div>
                    <span>Días sin clases</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#4A102A]">
                  {date ? "Clases del día seleccionado" : "Todas las clases"}
                </CardTitle>
                <CardDescription>
                  {filteredClasses.length} clase(s) {date ? "programada(s) para este día" : "en total"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredClasses.length === 0 ? (
                    <div className="text-center py-8">
                      <CalendarIcon className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">
                        {date ? "No hay clases programadas para este día" : "No hay clases programadas"}
                      </p>
                    </div>
                  ) : (
                    filteredClasses
                      .sort((a, b) => {
                        if (!date) {
                          const dateA = convertUtcToLocalDateForDisplay(a.date)
                          const dateB = convertUtcToLocalDateForDisplay(b.date)
                          if (dateA.getTime() !== dateB.getTime()) {
                            return dateA.getTime() - dateB.getTime()
                          }
                        }
                        return formatTime(a.time).localeCompare(formatTime(b.time))
                      })
                      .map((cls) => (
                        <Card
                          key={cls.id}
                          className="border border-gray-200 hover:shadow-sm transition-shadow cursor-pointer"
                          onClick={() => {
                            if (!date) {
                              setDate(convertUtcToLocalDateForDisplay(cls.date))
                            }
                          }}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h4 className="font-semibold text-[#4A102A]">{cls.classType.name}</h4>
                                  <Badge variant="outline" className="text-xs">
                                    {formatTime(cls.time)}
                                  </Badge>
                                  {cls.availableSpots === 0 && (
                                    <Badge variant="destructive" className="text-xs">
                                      Lleno
                                    </Badge>
                                  )}
                                </div>
                                {!date && (
                                  <p className="text-sm text-gray-600 mb-1">
                                    {format(convertUtcToLocalDateForDisplay(cls.date), "EEEE, d 'de' MMMM", {
                                      locale: es,
                                    })}
                                  </p>
                                )}
                                <p className="text-sm text-gray-600 mb-2">
                                  {cls.instructor.user.firstName} {cls.instructor.user.lastName}
                                </p>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                  <span className="flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    {cls.maxCapacity - cls.availableSpots}/{cls.maxCapacity}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {cls.classType.duration} min
                                  </span>
                                  {cls.waitlist.length > 0 && (
                                    <span className="text-orange-600">Lista: {cls.waitlist.length}</span>
                                  )}
                                </div>
                              </div>
                              <div className="flex gap-1 ml-4">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-gray-400 hover:text-[#4A102A]"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    onOpenEditScheduleDialog(cls)
                                  }}
                                >
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-gray-400 hover:text-[#C5172E]"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    onDeleteSchedule(cls.id)
                                  }}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Panel lateral - Detalles y resumen */}
        <div className="space-y-4">
          {/* Detalles del día seleccionado */}
          {date && (
            <Card className="bg-white border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#4A102A] text-lg">{format(selectedDate, "EEEE", { locale: es })}</CardTitle>
                <CardDescription>{format(selectedDate, "d 'de' MMMM 'de' yyyy", { locale: es })}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {classesForSelectedDate.length === 0 ? (
                  <div className="text-center py-6">
                    <CalendarIcon className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">No hay clases este día</p>
                  </div>
                ) : (
                  classesForSelectedDate.map((cls) => (
                    <Card key={cls.id} className="border border-gray-100 bg-gray-50">
                      <CardContent className="p-3">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-[#4A102A] text-sm">{cls.classType.name}</h4>
                            <Badge variant="outline" className="text-xs">
                              {formatTime(cls.time)}
                            </Badge>
                          </div>
                          <p className="text-xs text-gray-600">
                            {cls.instructor.user.firstName} {cls.instructor.user.lastName}
                          </p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-1 text-gray-500">
                              <Users className="h-3 w-3" />
                              {cls.maxCapacity - cls.availableSpots}/{cls.maxCapacity}
                            </span>
                            <span className="flex items-center gap-1 text-gray-500">
                              <Clock className="h-3 w-3" />
                              {cls.classType.duration}min
                            </span>
                          </div>
                          {cls.waitlist.length > 0 && (
                            <Badge variant="outline" className="text-xs w-full justify-center">
                              Lista de espera: {cls.waitlist.length}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </CardContent>
            </Card>
          )}

          {/* Resumen estadístico */}
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200">
            <CardContent className="p-4">
              <h4 className="font-medium text-[#4A102A] mb-3">Resumen</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total clases:</span>
                  <span className="font-medium">{scheduledClasses.length}</span>
                </div>
                {date && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Clases hoy:</span>
                    <span className="font-medium">{classesForSelectedDate.length}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Tipos únicos:</span>
                  <span className="font-medium">{new Set(scheduledClasses.map((cls) => cls.classType.id)).size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Instructores:</span>
                  <span className="font-medium">{new Set(scheduledClasses.map((cls) => cls.instructor.id)).size}</span>
                </div>
                <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                  <span className="text-gray-600">Capacidad total:</span>
                  <span className="font-medium">{scheduledClasses.reduce((sum, cls) => sum + cls.maxCapacity, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Plazas ocupadas:</span>
                  <span className="font-medium">
                    {scheduledClasses.reduce((sum, cls) => sum + (cls.maxCapacity - cls.availableSpots), 0)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
