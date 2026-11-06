window.RecruiterView = ({ candidatosPaginados, busca, setBusca, setCandidatoAgendando, setCandidatoSelecionado, perfilEmpresa }) => {
    return (
        <div className="space-y-6">
            <div className="bg-slate-950/70 p-4 rounded-2xl border border-emerald-500/20 flex flex-col md:flex-row justify-between items-center gap-3">
                <input type="text" placeholder="Buscar candidato por nome ou cargo..." value={busca} onChange={(e) => setBusca(e.target.value)} className="bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white w-full max-w-md" />
                <div className="text-xs text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 px-3 py-2 rounded-xl">
                    Empresa: <b>{perfilEmpresa.nomeEmpresa}</b>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {candidatosPaginados.map(c => (
                    <div key={c.id} className="bg-slate-950/65 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                        <div className="flex items-center gap-3">
                            <img src={c.foto} className="w-12 h-12 rounded-full object-cover border border-emerald-500" />
                            <div>
                                <h3 className="font-bold text-white">{c.nome}</h3>
                                <p className="text-xs text-emerald-400 font-semibold">{c.cargo}</p>
                            </div>
                        </div>
                        <button onClick={() => setCandidatoAgendando(c)} className="w-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 py-2 rounded-xl text-xs font-semibold border border-blue-500/30 transition">📅 Agendar Entrevista</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
