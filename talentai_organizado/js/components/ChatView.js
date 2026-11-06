window.ChatView = ({ mensagensChat, textoMensagem, setTextoMensagem, enviarMensagemChat, user }) => {
    return (
        <div className="bg-slate-950/75 border border-emerald-500/30 rounded-3xl p-6 h-[calc(100vh-140px)] flex flex-col">
            <h2 className="text-lg font-bold text-white mb-4">💬 Chat de Recrutamento</h2>
            <div className="flex-1 overflow-y-auto space-y-3 bg-slate-900/60 p-4 rounded-2xl mb-4 border border-slate-800">
                {mensagensChat.map((m, idx) => (
                    <div key={idx} className={`flex flex-col ${m.remetente === (user.role === 'candidato' ? 'Candidato' : 'Recrutador') ? 'items-end' : 'items-start'}`}>
                        <span className="text-[10px] text-slate-400 mb-1">{m.remetente} • {m.data}</span>
                        <div className="bg-slate-900 border border-slate-700 p-3 rounded-2xl text-sm max-w-md text-slate-200">{m.texto}</div>
                    </div>
                ))}
            </div>
            <form onSubmit={enviarMensagemChat} className="flex gap-2">
                <input type="text" placeholder="Digite sua mensagem..." value={textoMensagem} onChange={(e) => setTextoMensagem(e.target.value)} className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white" />
                <button type="submit" className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium">Enviar</button>
            </form>
        </div>
    );
};
