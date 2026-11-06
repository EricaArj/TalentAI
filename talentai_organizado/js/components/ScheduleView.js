window.ScheduleView = ({ entrevistas, setEntrevistas, user, candidatoAgendando, setCandidatoAgendando, agendarEntrevista, novaData, setNovaData, novoHorario, setNovoHorario, novoLinkVideo, setNovoLinkVideo }) => {
    return (
        <div className="space-y-6">
            <div className="bg-slate-950/80 p-6 rounded-3xl border border-emerald-500/30 space-y-6">
                <h2 className="text-xl font-bold text-white">📅 Agenda de Entrevistas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {entrevistas.map(ent => (
                        <div key={ent.id} className="bg-slate-900/80 border border-slate-800 p-5 rounded-2xl space-y-3">
                            <h3 className="font-bold text-emerald-400">{ent.candidato}</h3>
                            <p className="text-xs text-slate-300">📅 {ent.data} às {ent.horario}</p>
                            <a href={ent.link} target="_blank" className="block bg-emerald-600 text-white text-center py-2 rounded-xl text-xs font-bold">🎥 Entrar na Reunião</a>
                        </div>
                    ))}
                </div>
            </div>

            {candidatoAgendando && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
                    <div className="bg-slate-950 border border-emerald-500/30 rounded-3xl max-w-md w-full p-6 space-y-4">
                        <h3 className="font-bold text-white text-lg">Agendar para {candidatoAgendando.nome}</h3>
                        <form onSubmit={agendarEntrevista} className="space-y-3">
                            <input type="date" required value={novaData} onChange={(e) => setNovaData(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white" />
                            <input type="time" required value={novoHorario} onChange={(e) => setNovoHorario(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white" />
                            <input type="text" placeholder="Link da Videochamada" value={novoLinkVideo} onChange={(e) => setNovoLinkVideo(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white" />
                            <div className="flex justify-end gap-2 pt-2">
                                <button type="button" onClick={() => setCandidatoAgendando(null)} className="bg-slate-900 text-slate-300 px-4 py-2 rounded-xl text-xs">Cancelar</button>
                                <button type="submit" className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
