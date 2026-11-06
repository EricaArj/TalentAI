window.gerarPerfisIniciais = () => {
    const areas = [
        { nome: "Tecnologia", cargos: ["Desenvolvedor Full Stack", "Engenheiro de Dados", "Arquiteto Cloud"] },
        { nome: "Saúde", cargos: ["Médico Clínico", "Enfermeiro Chefe"] },
        { nome: "Finanças", cargos: ["Analista Financeiro", "Gerente de Riscos"] }
    ];

    const nomes = ["Ana", "Carlos", "Beatriz", "Lucas", "Mariana", "Gabriel"];
    const sobrenomes = ["Silva", "Santos", "Oliveira", "Souza", "Rodrigues"];
    const senioridades = ["Júnior", "Pleno", "Sênior"];
    const skillsPool = [["React", "Node.js", "TypeScript"], ["Python", "SQL", "AWS"], ["Java", "Spring Boot", "Docker"]];
    
    const fotosPool = [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    ];

    const perfis = [];
    for (let i = 1; i <= 30; i++) {
        const areaObj = areas[i % areas.length];
        const cargo = areaObj.cargos[i % areaObj.cargos.length];
        const nome = `${nomes[i % nomes.length]} ${sobrenomes[(i * 3) % sobrenomes.length]} ${i}`;
        perfis.push({
            id: i,
            nome,
            cargo,
            area: areaObj.nome,
            senioridade: senioridades[i % senioridades.length],
            habilidades: skillsPool[i % skillsPool.length],
            match: Math.floor(Math.random() * 20) + 80,
            foto: fotosPool[i % fotosPool.length],
            email: `candidato${i}@talentai.com`,
            telefone: `(11) 9${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(1000 + Math.random() * 9000)}`,
            linkedin: "https://linkedin.com/in/exemplo",
            github: "https://github.com/exemplo",
            portfolio: "https://meusite.com",
            status: "Pendente",
            resumo: `Profissional especializado em ${areaObj.nome}.`,
            formacao: "Graduação Superior Completa em Tecnologia da Informação",
            projetos: [
                { 
                    titulo: "Plataforma de E-commerce", 
                    descricao: "Arquitetura escalável com React e Node.js.", 
                    fotoProjeto: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=80",
                    linkProjeto: "https://github.com/exemplo/ecommerce",
                    videoProjeto: "https://www.youtube.com/embed/dQw4w9WgXcQ"
                }
            ]
        });
    }
    return perfis;
};
