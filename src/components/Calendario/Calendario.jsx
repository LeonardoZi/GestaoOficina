import React, { useState } from 'react'
import moment from 'moment'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop"
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-big-calendar/lib/addons/dragAndDrop/styles.css"
import styles from "./Calendario.module.css"
import EventModal from './EventModal'

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

const Calendario = () => {

    const [eventos, setEventos] = useState([{
        id: 1,
        title: 'Fox Oficina',
        start: new Date(2026,2,19,8,0),
        end: new Date(2026,2,19,9,0),
        desc: 'Levar o Fox na oficina. OBS: Ir em 2 carros',
        color: 'red',
        tipo: 'atividade',
    },
    {
        id: 2,
        title: 'Mae Endocrino',
        start: new Date(2026,2,19,13,0),
        end: new Date(2026,2,19,14,0),
        desc: 'Evento2',
        color: 'blue',
        tipo: 'atividade',
    }
    ])

    const [eventoSelecionado, setEventoSelecionado] = useState(null);

    const eventStyle = (event) => ({
        style:{
            backgroundColor: event.color,
        },
    })

    const handleEventClick = (evento) => {
        setEventoSelecionado(evento);
    }

    const handlEventClose = () => {
        setEventoSelecionado(null);
    }

    const moverEventos = (data) => {
        const {start, end} = data;
        const updatedEvents = eventos.map((event) => {
            if(event.id === data.event.id){
                return{
                    ...event,
                    start: new Date(start),
                    end: new Date(end)
                };
            }
            return event;
        });

        setEventos(updatedEvents)
    }
    

  return (
    <>
        <DragAndDropCalendar
            defaultDate={moment().toDate()}
            defaultView='month'
            events={eventos}
            localizer = {localizer}
            resizable
            onEventDrop={moverEventos}
            onEventResize={moverEventos}
            onSelectEvent={handleEventClick}
            eventPropGetter={eventStyle}
            className={styles.calendar}
        />

        {eventoSelecionado && (
            <EventModal
                evento = {eventoSelecionado}
                onClose = {handlEventClose}
            />
        )}
    
    </>
  )
}

export default Calendario