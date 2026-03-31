import React, { useEffect, useState } from 'react'
import styles_dark from './ChatSupport_Dark.module.css'
import styles_light from './ChatSupport_Light.module.css'
import { getAllTickets, getTicket, sendAdminMessage } from '../../../api';

function ChatSupport({ theme }) {

    const style = theme === 'dark' ? styles_dark : styles_light
    const [tickets, setTickets] = useState([])
    const [selectedTicketId, setSelectedTicketId] = useState(null)
    const [ticketDetail, setTicketDetail] = useState(null)
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)
    const [detailLoading, setDetailLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getAllTickets();
                const list = res.data.data || [];
                setTickets(list);
                if (list.length) setSelectedTicketId(list[0].id);
            } catch (err) {
                setError('Failed to load data');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchDetail = async () => {
            if (!selectedTicketId) return;
            setDetailLoading(true);
            try {
                const res = await getTicket(selectedTicketId);
                setTicketDetail(res.data.data);
            } catch (err) {
                setError('Failed to load data');
            } finally {
                setDetailLoading(false);
            }
        };
        fetchDetail();
    }, [selectedTicketId]);

    const onSend = async () => {
        if (!selectedTicketId || !message.trim()) return;
        try {
            await sendAdminMessage(selectedTicketId, message.trim());
            setMessage('');
            const refreshed = await getTicket(selectedTicketId);
            setTicketDetail(refreshed.data.data);
        } catch (err) {
            setError('Failed to send message');
        }
    };

    return (
        <div className='row'>
            <div className='col-md-12 my-3'>
                <h3 className={`${style.page_title}`}>Chat and support</h3>
            </div>
            <div className='col-md-12'>
                <div className={`${style.chat_cards}`}>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className={`${style.chat_card}`}>
                                <h5 className={`${style.title}`}>Tickets</h5>
                                {loading && <p>Loading...</p>}
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                {!loading && !error && tickets.map((ticket) => (
                                    <div
                                        key={ticket.id}
                                        className={`${style.chat_card} mt-2`}
                                        style={{ cursor: 'pointer', border: selectedTicketId === ticket.id ? '1px solid #1ecb4f' : '' }}
                                        onClick={() => setSelectedTicketId(ticket.id)}
                                    >
                                        <h6 className={`${style.title}`}>{ticket.subject}</h6>
                                        <p className={`${style.description}`}>{ticket.status} | {ticket.priority}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className={`${style.chat_box} position-relative`}>
                                <h5 className={`${style.title}`}>{ticketDetail?.subject || 'Select a ticket'}</h5>
                                {detailLoading && <p>Loading...</p>}
                                {!detailLoading && ticketDetail && (
                                    <div className='mt-3'>
                                        {(ticketDetail.messages || []).map((msg) => (
                                            <div key={msg.id} className={`${style.chat_card} mt-2`}>
                                                <p className={`${style.description}`}><strong>{msg.sender?.username || 'Admin'}:</strong> {msg.message}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className={`${style.chat_input}`}>
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='Write your response'
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                        <span className={`${style.input_group_text} input-group-text`} onClick={onSend} style={{ cursor: 'pointer' }}><img src="/send.svg" alt="" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatSupport