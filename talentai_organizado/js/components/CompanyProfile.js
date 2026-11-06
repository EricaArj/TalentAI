window.CompanyProfile = ({ perfilEmpresa, setPerfilEmpresa, editandoEmpresa, setEditandoEmpresa }) => {
    return (
        <div className="bg-slate-950/80 border border-emerald-500/30 rounded-3xl p-8 max-w-3xl mx-auto space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <h2 className="text-2xl font-bold text-white">🏢 Perfil da Empresa & Vagas</h2>
                <button onClick={() => setEditandoEmpresa(!editandoEmpresa)} className="bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 px-4 py-2 rounded-xl text-xs font-semibold">
                    {editandoEmpresa ? 'Salvar Perfil' : '✏️ Editar Dados'}
                </button>
            </div>
            <div className="space-y-4">
                <div>
                    <label className="text-xs text-slate-400 block mb-1">Nome da Empresa</label>
                    {editandoEmpresa ? (
                        <input type="text" value={perfilEmpresa.nomeEmpresa} onChange={(e) => setPerfilEmpresa({...perfilEmpresa, nomeEmpresa: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white" />
                    ) : (
                        <p className="text-lg font-bold text-emerald-400 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">{perfilEmpresa.nomeEmpresa}</p>
                    )}
                </div>
                <div>
                    <label className="text-xs text-slate-400 block mb-1">Vagas Disponíveis</label>
                    {editandoEmpresa ? (
                        <textarea value={perfilEmpresa.vagas} onChange={(e) => setPerfilEmpresa({...perfilEmpresa, vagas: e.target.value})} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white h-20" />
                    ) : (
                        <p className="text-sm text-slate-300 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">{perfilEmpresa.vagas}</p>
                    )}
                </div>
            </div>
        </div>
    );
};
