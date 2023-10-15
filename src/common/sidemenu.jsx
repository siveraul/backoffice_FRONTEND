const permissoesData = localStorage.getItem("permissoes");
const permissoes = JSON.parse(permissoesData);
console.log(permissoes.confimar_passagem_por_scan_origim); 

export const MENUITEMS = [
  {
    menutitle: "Início",
    Items: [
      {
        title: "Dashboards",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}dashboard/dashboard1`,
            type: "link",
            active:false,
            selected:false,
            title: "Dashboard",
          },
        ].filter(Boolean),
      },
    ],
  },

  {
    menutitle: "Configurações",
    Items: [
      {
        title: "Regiões",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          permissoes.ver_distrito &&
            {
              path: `${import.meta.env.BASE_URL}advancedui/distritolist`,
              type: "link",
              active:false,
              selected:false,
              title: "Distritos",
            },
            permissoes.ver_provincia &&
          {
            path: `${import.meta.env.BASE_URL}advancedui/provincialist`,
            type: "link",
            active:false,
            selected:false,
            title: "Provincias",
          },
          permissoes.ver_zona &&
          {
            path: `${import.meta.env.BASE_URL}advancedui/zonalist`,
            type: "link",
            active:false,
            selected:false,
            title: "Zona",
          },
        ].filter(Boolean)
      },
      {
        title: "Aeroportos",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z" />
            <path d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
            <path d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          permissoes.ver_aeroporto &&
          {
            path: `${import.meta.env.BASE_URL}advancedui/aeroportolist`,
            type: "link",
            active:false,
            selected:false,
            title: "Aeroportos",
          },
        ].filter(Boolean),
      },
      
      {
        title: "Terminais",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          permissoes.ver_terminal &&
          {
            path: `${import.meta.env.BASE_URL}advancedui/terminaislist`,
            type: "link",
            active:false,
            selected:false,
            title: "Terminais",
          },
          permissoes.ver_sessao_do_terminal &&
          {
            path: `${import.meta.env.BASE_URL}advancedui/sessaoterminaislist`,
            type: "link",
            active:false,
            selected:false,
            title: "Secção do Terminal",
          },
        ].filter(Boolean),
      },

      {
        title: "Cargas",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z" />
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          permissoes.ver_tipo_carga &&
          {
            path: `${import.meta.env.BASE_URL}advancedui/tipocargalist`,
            type: "link",
            active:false,
            selected:false,
            title: "Tipo de Carga",
          },
        ].filter(Boolean),
      },
      {
        title: "Entidades",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          
          {
            path: `${import.meta.env.BASE_URL}advancedui/entidadelist`,
            type: "link",
            active:false,
            selected:false,
            title: "Entidades",
          },
          permissoes.ver_taxa &&
          {
            path: `${import.meta.env.BASE_URL}advancedui/taxalist`,
            type: "link",
            active:false,
            selected:false,
            title: "Taxas",
          },
        ].filter(Boolean),
      },
      {
        title: "Utilizadores",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
          permissoes.ver_utilizador &&
          {
            path: `${import.meta.env.BASE_URL}advancedui/utilizadoreslist`,
            type: "link",
            active:false,
            selected:false,
            title: "Utilizadores",
          },
          permissoes.ver_permissoes &&
          {
            path: `${import.meta.env.BASE_URL}advancedui/perfislist`,
            type: "link",
            active:false,
            selected:false,
            title: "Perfis",
          },
        ].filter(Boolean),
      },
    ],
  },

  {
    menutitle: "Gestão de cargas",
    Items: [
      {
        title: "Aprovacoes",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "sub",
        selected:false,
        active:false,
        children: [
            permissoes.confimar_passagem_por_scan_origim &&
          {
            path: `${import.meta.env.BASE_URL}advancedui/aprovacoesautoridadecarga`,
            type: "link",
            active:false,
            selected:false,
            title: "Autoridade de Carga",
          },
          permissoes.confimar_passagem_por_scan_origim &&
          {
            path: `${import.meta.env.BASE_URL}advancedui/aprovacoesagenteterminal`,
            type: "link",
            active:false,
            selected:false,
            title: "Agente de Terminal",
          },

        ].filter(Boolean),
      },
    ],
  },
 
];
