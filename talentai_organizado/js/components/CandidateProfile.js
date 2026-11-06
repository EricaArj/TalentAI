window.CandidateProfile = ({ meuCurriculo, setMeuCurriculo, editandoCurriculo, setEditandoCurriculo, baixarCurriculoTXT, novaHabilidade, setNovaHabilidade, adicionarHabilidade, removerHabilidade, novoProjTit, setNovoProjTit, novoProjDesc, setNovoProjDesc, novoProjFoto, setNovoProjFoto, novoProjLink, setNovoProjLink, novoProjVideo, setNovoProjVideo, adicionarProjeto }) => {
    if (!meuCurriculo) return null;

    return (
        <div className="bg-slate-950/75 p-6 rounded-3xl border border-emerald-500/30 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                <div className="flex items-center gap-4">
                    <img src={meuCurriculo.foto} className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500" />
                    <div>
                        <h2 className="text-2xl font-bold text-white">{meuCurriculo.nome}</h2>
                        <p className="text-emerald-400 text-sm">{meuCurriculo.cargo}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button onClick={baixarCurriculoTXT} className="bg-blue-600/30 text-blue-300 px-4 py-2 rounded-xl text-xs">📥 Baixar TXT</button>
                    <button onClick={() => setEditandoCurriculo(!editandoCurriculo)} className="bg-emerald-600/20 text-emerald-300 px-4 py-2 rounded-xl text-xs">{editandoCurriculo ? 'Concluir' : '✏️ Editar'}</button>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-bold text-slate-300 uppercase">⚡ Habilidades</h3>
                <div className="flex flex-wrap gap-2">
                    {meuCurriculo.habilidades && meuCurriculo.habilidades.map((skill, i) => (
                        <span key={i} className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-xl text-xs flex gap-2">
                            {skill} {editandoCurriculo && <button onClick={() => removerHabilidade(i)} className="text-red-400 font-bold">×</button>}
                        </span>
                    ))}
                </div>
                {editandoCurriculo && (
                    <div className="flex gap-2 pt-2 max-w-sm">
                        <input type="text" placeholder="Nova Habilidade" value={novaHabilidade} onChange={(e) => setNovaHabilidade(e.target.value)} className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 text-xs text-white" />
                        <button onClick={adicionarHabilidade} className="bg-emerald-600 text-white px-3 py-1.5 rounded-xl text-xs font-semibold">+ Adicionar</button>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <h3 className="text-sm font-bold text-slate-300 uppercase">Sobre mim</h3>
                {editandoCurriculo ? (
                    <textarea value={meuCurriculo.resumo} onChange={(e) => setMeuCurriculo({ ...meuCurriculo, resumo: e.target.value })} className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm text-white h-24" />
                ) : (
                    <p className="text-sm text-slate-300 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">{meuCurriculo.resumo}</p>
                )}
            </div>
        </div>
    );
};
