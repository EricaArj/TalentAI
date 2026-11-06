window.ModalAuth = ({ modalAuth, setModalAuth, fluxoTipo, setFluxoTipo, etapaAuth, setEtapaAuth, emailInput, setEmailInput, senhaInput, setSenhaInput, celularInput, setCelularInput, nomeInput, setNomeInput, tokenGerado, tokenDigitado, setTokenDigitado, enviarTokenCadastro, avancarParaTokenLogin, finalizarCadastroOuLogin }) => {
    if (!modalAuth) return null;

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <div className="bg-slate-950 border border-emerald-500/30 rounded-3xl max-w-md w-full p-6 space-y-4">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                    <h2 className="text-lg font-bold text-white">
                        {fluxoTipo.includes('cadastro') ? 'Criar Cadastro' : etapaAuth === 'token' ? '🔑 Validação SMS' : 'Entrar'}
                    </h2>
                    <button onClick={() => setModalAuth(false)} className="text-slate-400 hover:text-white">✕</button>
                </div>

                {fluxoTipo.includes('cadastro') ? (
                    etapaAuth === 'credenciais' ? (
                        <form onSubmit={enviarTokenCadastro} className="space-y-3">
                            <div><label className="text-xs text-slate-400 block mb-1">Nome</label><input type="text" required value={nomeInput} onChange={(e) => setNomeInput(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white" /></div>
                            <div><label className="text-xs text-slate-400 block mb-1">E-mail</label><input type="email" required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white" /></div>
                            <div><label className="text-xs text-slate-400 block mb-1">Celular</label><input type="tel" required value={celularInput} onChange={(e) => setCelularInput(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white" /></div>
                            <div><label className="text-xs text-slate-400 block mb-1">Senha</label><input type="password" required value={senhaInput} onChange={(e) => setSenhaInput(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white" /></div>
                            <div className="flex justify-end gap-2 pt-3">
                                <button type="button" onClick={() => setModalAuth(false)} className="bg-slate-900 text-slate-300 px-4 py-2 rounded-xl text-xs">Cancelar</button>
                                <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-medium">Enviar Token SMS</button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={finalizarCadastroOuLogin} className="space-y-4 text-center">
                            <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-2xl">
                                <p className="text-xs text-emerald-300 mb-1">Token SMS:</p>
                                <span className="text-xl font-mono font-bold text-white tracking-widest">{tokenGerado}</span>
                            </div>
                            <div><input type="text" maxLength="6" required value={tokenDigitado} onChange={(e) => setTokenDigitado(e.target.value)} className="w-full text-center text-xl font-mono tracking-widest bg-slate-900 border border-emerald-500 rounded-xl py-3 text-white" placeholder="000000" /></div>
                            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl text-sm font-bold">Confirmar</button>
                        </form>
                    )
                ) : etapaAuth === 'credenciais' ? (
                    <form onSubmit={avancarParaTokenLogin} className="space-y-3">
                        <div><label className="text-xs text-slate-400 block mb-1">E-mail</label><input type="email" required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white" /></div>
                        <div><label className="text-xs text-slate-400 block mb-1">Senha</label><input type="password" required value={senhaInput} onChange={(e) => setSenhaInput(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white" /></div>
                        <div className="flex justify-end gap-2 pt-3">
                            <button type="button" onClick={() => setModalAuth(false)} className="bg-slate-900 text-slate-300 px-4 py-2 rounded-xl text-xs">Cancelar</button>
                            <button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-medium">Prosseguir</button>
                        </div>
                        <div className="text-center pt-2">
                            <button type="button" onClick={() => { setEtapaAuth('credenciais'); setFluxoTipo(`cadastro_${fluxoTipo}`); }} className="text-xs text-emerald-400 hover:underline">Não tem cadastro? Inscreva-se</button>
                        </div>
                    </form>
                ) : (
                    <form onSubmit={finalizarCadastroOuLogin} className="space-y-4 text-center">
                        <div className="bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-2xl">
                            <p className="text-xs text-emerald-300 mb-1">Token SMS:</p>
                            <span className="text-xl font-mono font-bold text-white tracking-widest">{tokenGerado}</span>
                        </div>
                        <div><input type="text" maxLength="6" required value={tokenDigitado} onChange={(e) => setTokenDigitado(e.target.value)} className="w-full text-center text-xl font-mono tracking-widest bg-slate-900 border border-emerald-500 rounded-xl py-3 text-white" placeholder="000000" /></div>
                        <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl text-sm font-bold">Validar e Entrar</button>
                    </form>
                )}
            </div>
        </div>
    );
};
