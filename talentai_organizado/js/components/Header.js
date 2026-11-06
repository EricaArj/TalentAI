window.Header = ({ user, abaAtiva, setAbaAtiva, onLogout }) => {
    return (
        <header className="bg-slate-950/80 backdrop-blur-md border-b border-emerald-500/20 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/30">AI</div>
                <div>
                    <h1 className="font-bold text-lg text-white">TalentAI</h1>
                    <p className="text-xs text-emerald-400">Usuário: {user.email} <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full text-[10px]">🔒 Validado</span></p>
                </div>
            </div>

            <div className="flex items-center gap-2">
                {user.role === 'recrutador' && (
                    <>
                        <button onClick={() => setAbaAtiva('recrutador')} className={`px-4 py-2 rounded-lg text-sm transition ${abaAtiva === 'recrutador' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>Candidatos</button>
                        <button onClick={() => setAbaAtiva('agenda')} className={`px-4 py-2 rounded-lg text-sm transition ${abaAtiva === 'agenda' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>📅 Agenda</button>
                        <button onClick={() => setAbaAtiva('empresa_perfil')} className={`px-4 py-2 rounded-lg text-sm transition ${abaAtiva === 'empresa_perfil' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>🏢 Empresa</button>
                    </>
                )}
                {user.role === 'candidato' && (
                    <>
                        <button onClick={() => setAbaAtiva('meu_curriculo')} className={`px-4 py-2 rounded-lg text-sm transition ${abaAtiva === 'meu_curriculo' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>📄 Currículo</button>
                        <button onClick={() => setAbaAtiva('agenda')} className={`px-4 py-2 rounded-lg text-sm transition ${abaAtiva === 'agenda' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>📅 Entrevistas</button>
                    </>
                )}
                <button onClick={() => setAbaAtiva('chat')} className={`px-4 py-2 rounded-lg text-sm transition ${abaAtiva === 'chat' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'}`}>💬 Chat</button>
                <button onClick={onLogout} className="bg-red-600/40 text-red-200 hover:bg-red-600/60 px-3 py-2 rounded-lg text-sm transition">Sair</button>
            </div>
        </header>
    );
};
