  import { Component, ElementRef, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

  @Component({
    selector: 'app-calendario',
    templateUrl: './calendario.component.html',
    styleUrls: ['./calendario.component.css']
  })
  export class CalendarioComponent {
      @ViewChild('calendarEl', { static: true }) calendarEl!: ElementRef;
      public calendar!: Calendar;
      modalVisible: boolean = false;
      selectedStartDate: string = '';
      selectedEndDate: string = '';
      selectedTitle: string = '';

      constructor() { }

      ngOnInit(): void {
      }
    /*   calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin]
      }; */

      ngAfterViewInit(): void {
        /* this.initCalendar(); */
      }

      /* initCalendar(): void {
        const hoy = new Date();
        this.calendar = new Calendar(this.calendarEl.nativeElement, {
            plugins: [interactionPlugin],
            initialView: 'timeGridFourDay',
            views: {
                timeGridFourDay: {
                    type: 'timeGrid',
                    duration: { days: 7 }
                }
            },
            locale: 'es',
            slotMinTime: '06:00:00',
            slotMaxTime: '12:00:00',
            buttonText: {
                today: 'Hoy',
            },
            validRange: {
                start: hoy,
                end: hoy // Opcional: Puedes especificar también 'end' si deseas solo mostrar el día actual
            },
            // Opcional: Maneja el evento de selección de fecha y hora
            // select: this.handleDateSelect.bind(this)
        });

        this.calendar.render();
    } */

      // Función para manejar la selección de fecha y hora
      /* handleDateSelect(arg: any) {
        this.selectedStartDate = arg.startStr;
        this.selectedEndDate = arg.endStr;
        this.modalVisible = true; // Mostrar el modal cuando se selecciona una fecha y hora
      }

      // Función para agregar un nuevo evento
      addEvent() {
        const nuevoEvento: EventInput = {
          title: this.selectedTitle,
          start: this.selectedStartDate,
          end: this.selectedEndDate
        };
        this.calendar.addEvent(nuevoEvento); // Agrega el nuevo evento al calendario
        this.modalVisible = false; // Cierra el modal después de agregar el evento
        // Limpia los valores seleccionados
        this.selectedStartDate = '';
        this.selectedEndDate = '';
        this.selectedTitle = '';
      } */



      calendarOptions: CalendarOptions = {
          initialView: 'timeGridWeek',
          plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
          dateClick: (arg) => this.handleDateClick(arg),
          events: [
              { title: 'event 1', start: '2024-05-31T18:00:00', end: '2024-05-31T20:00:00' },
              { title: 'event 2', date: '2019-20-02' }
          ],
          locale: 'es',
          slotMinTime: '18:00:00',
          slotMaxTime: '24:00:00',
          buttonText: {
              today: 'Hoy',
          },
          validRange: {
              start: new Date() // Solo se permiten fechas a partir de hoy
          },
      };

      handleDateClick(arg: any) {
          alert('date click! ' + arg.dateStr)
      }
  }

