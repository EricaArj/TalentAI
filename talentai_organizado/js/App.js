const { useState, useMemo } = React;

function App() {
    const [user, setUser] = useState(null);
    const [candidatos, setCandidatos] = useState(window.gerarPerfisIniciais());
    const [filtroArea, setFiltroArea] = useState('Todas');
    const [busca, setBusca] = useState('');
    const [abaAtiva, setAbaAtiva] = useState('recrutador');
    const [paginaAtual, setPaginaAtual] = useState(1);

    const [modalAuth, setModalAuth] = useState(false);
    const [fluxoTipo, setFluxoTipo] = useState(''); 
    const [etapaAuth, setEtapaAuth] = useState('credenciais'); 
    const [emailInput, setEmailInput] = useState('');
    const [senhaInput, setSenhaInput] = useState('');
    const [celularInput, setCelularInput] = useState('');
    const [nomeInput, setNomeInput] = useState('');
    const [tokenGerado, setTokenGerado] = useState('');
    const [tokenDigitado, setTokenDigitado] = useState('');

    const [meuCurriculo, setMeuCurriculo] = useState(null);
    const [editandoCurriculo, setEditandoCurriculo] = useState(false);
    const [novaHabilidade, setNovaHabilidade] = useState('');

    const [perfilEmpresa, setPerfilEmpresa] = useState({
        nomeEmpresa: 'TalentTech Corp',
        cultura: 'Inovação rápida, autonomia e foco em resultados.',
        beneficios: 'Plano de Saúde, VR, VA, Horário Flexível.',
        vagas: 'Desenvolvedor Full Stack Sênior, Cientista de Dados'
    });
    const [editandoEmpresa, setEditandoEmpresa] = useState(false);
    const [candidatoSelecionado, setCandidatoSelecionado] = useState(null);

    const [mensagensChat, setMensagensChat] = useState([
        { remetente: 'Recrutador', texto: 'Olá! Vimos seu perfil e gostamos muito.', data: '10:00' }
    ]);
    const [textoMensagem, setTextoMensagem] = useState('');
    const [entrevistas, setEntrevistas] = useState([
        { id: 1, candidato: 'Ana Silva', email: 'candidato1@talentai.com', data: '2026-06-10', horario: '14:00', link: 'https://meet.google.com/abc', status: 'Confirmada' }
    ]);
    const [novaData, setNovaData] = useState('');
    const [novoHorario, setNovoHorario] = useState('');
    const [novoLinkVideo, setNovoLinkVideo] = useState('');
    const [candidatoAgendando, setCandidatoAgendando] = useState(null);

    const abrirLogin = (tipo) => {
        setFluxoTipo(tipo);
        setEtapaAuth('credenciais');
        setModalAuth(true);
    };

    const avancarParaTokenLogin = (e) => {
        e.preventDefault();
        setTokenGerado(Math.floor(100000 + Math.random() * 900000).toString());
        setEtapaAuth('token');
    };

    const enviarTokenCadastro = (e) => {
        e.preventDefault();
        setTokenGerado(Math.floor(100000 + Math.random() * 900000).toString());
        setEtapaAuth('token');
    };

    const finalizarCadastroOuLogin = (e) => {
        e.preventDefault();
        setUser({ email: emailInput || 'usuario@talentai.com', role: fluxoTipo.replace('cadastro_', '') });
        setAbaAtiva(fluxoTipo.includes('candidato') ? 'meu_curriculo' : 'recrutador');
        if (fluxoTipo.includes('candidato')) {
            setMeuCurriculo({
                nome: nomeInput || 'Candidato TalentAI',
                email: emailInput,
                cargo: 'Desenvolvedor Full Stack',
                habilidades: ['React', 'Node.js'],
                foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
                resumo: 'Resumo profissional atualizado.',
                projetos: []
            });
        }
        setModalAuth(false);
    };

    const candidatosPaginados = useMemo(() => candidatos.slice(0, 12), [candidatos]);

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm">
                <div className="bg-slate-900/85 backdrop-blur-md border border-emerald-500/30 rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
                    <div className="w-16 h-16 bg-emerald-600/30 border border-emerald-500/50 rounded-2xl flex items-center justify-center font-bold text-white text-2xl mx-auto mb-4">AI</div>
                    <h1 className="text-3xl font-bold text-white mb-1">TalentAI</h1>
                    <p className="text-emerald-300 text-sm mb-6 font-medium">Portal de Recrutamento Inteligente</p>
                    <div className="space-y-3">
                        <button onClick={() => abrirLogin('recrutador')} className="w-full bg-emerald-600 text-white py-3 rounded-xl font-medium">Entrar como Recrutador</button>
                        <button onClick={() => abrirLogin('candidato')} className="w-full bg-slate-800 text-white py-3 rounded-xl font-medium border border-slate-700">Entrar como Candidato</button>
                    </div>
                </div>
                <window.ModalAuth 
                    modalAuth={modalAuth} setModalAuth={setModalAuth} fluxoTipo={fluxoTipo} setFluxoTipo={setFluxoTipo} 
                    etapaAuth={etapaAuth} setEtapaAuth={setEtapaAuth} emailInput={emailInput} setEmailInput={setEmailInput} 
                    senhaInput={senhaInput} setSenhaInput={setSenhaInput} celularInput={celularInput} setCelularInput={setCelularInput} 
                    nomeInput={nomeInput} setNomeInput={setNomeInput} tokenGerado={tokenGerado} tokenDigitado={tokenDigitado} 
                    setTokenDigitado={setTokenDigitado} enviarTokenCadastro={enviarTokenCadastro} avancarParaTokenLogin={avancarParaTokenLogin} 
                    finalizarCadastroOuLogin={finalizarCadastroOuLogin} 
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen text-slate-100 flex flex-col bg-slate-950/30">
            <window.Header user={user} abaAtiva={abaAtiva} setAbaAtiva={setAbaAtiva} onLogout={() => setUser(null)} />
            <main className="flex-1 p-6 max-w-5xl mx-auto w-full">
                {abaAtiva === 'meu_curriculo' && <window.CandidateProfile meuCurriculo={meuCurriculo} setMeuCurriculo={setMeuCurriculo} editandoCurriculo={editandoCurriculo} setEditandoCurriculo={setEditandoCurriculo} novaHabilidade={novaHabilidade} setNovaHabilidade={setNovaHabilidade} />}
                {abaAtiva === 'recrutador' && <window.RecruiterView candidatosPaginados={candidatosPaginados} busca={busca} setBusca={setBusca} setCandidatoAgendando={setCandidatoAgendando} setCandidatoSelecionado={setCandidatoSelecionado} perfilEmpresa={perfilEmpresa} />}
                {abaAtiva === 'empresa_perfil' && <window.CompanyProfile perfilEmpresa={perfilEmpresa} setPerfilEmpresa={setPerfilEmpresa} editandoEmpresa={editandoEmpresa} setEditandoEmpresa={setEditandoEmpresa} />}
                {abaAtiva === 'agenda' && <window.ScheduleView entrevistas={entrevistas} setEntrevistas={setEntrevistas} user={user} candidatoAgendando={candidatoAgendando} setCandidatoAgendando={setCandidatoAgendando} novaData={novaData} setNovaData={setNovaData} novoHorario={novoHorario} setNovoHorario={setNovoHorario} novoLinkVideo={novoLinkVideo} setNovoLinkVideo={setNovoLinkVideo} />}
                {abaAtiva === 'chat' && <window.ChatView mensagensChat={mensagensChat} textoMensagem={textoMensagem} setTextoMensagem={setTextoMensagem} user={user} />}
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
