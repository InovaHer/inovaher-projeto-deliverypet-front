import { TbBrandVercel } from 'react-icons/tb'
import { SiVite, SiAxios, SiReactrouter } from 'react-icons/si'

type TipoStack = "frontend" | "backend" | "tudo"

interface StacksProps {
    tipo: TipoStack
    }

    function Stacks({ tipo }: StacksProps) {
    return (
       <div className="flex flex-col gap-8 items-center justify-center py-6">
       <div className="max-w-7xl w-full px-6 grid grid-cols-1 gap-12">

            {/* ================= BACKEND ================= */}
            {(tipo === "backend" || tipo === "tudo") && (
            <div className="text-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">

                <Stack icon="devicon-java-plain" title="Java" />
                <Stack icon="devicon-spring-plain" title="Spring Boot" />
                <Stack icon="devicon-swagger-plain" title="Swagger" />
                <Stack icon="devicon-mysql-plain" title="MySQL" />
                <Stack icon="devicon-postgresql-plain" title="PostgreSQL" />
                <Stack icon="devicon-git-plain" title="Git" />
                <Stack icon="devicon-github-original" title="GitHub" />
                <Stack icon="devicon-vscode-plain" title="VS Code" />
                <Stack icon="devicon-docker-plain" title="Docker" />

                </div>
            </div>
            )}

            {/* ================= FRONTEND ================= */}
            {(tipo === "frontend" || tipo === "tudo") && (
            <div className="text-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 place-items-center">
                <Stack icon="devicon-typescript-plain" title="TypeScript" />
                <Stack icon="devicon-html5-plain" title="HTML" />
                <Stack icon="devicon-nodejs-plain" title="Node.js" />
                <Stack icon="devicon-react-original" title="React" />
                <Stack icon="devicon-git-plain" title="Git" />
                <Stack icon="devicon-github-original" title="GitHub" />
                <Stack icon="devicon-vscode-plain" title="VS Code" />
                <Stack icon="devicon-tailwindcss-original" title="TailwindCSS" />

                <div className="flex flex-col items-center gap-2">
                    <TbBrandVercel className="text-5xl text-slate-800" />
                    <p className="text-slate-700 text-xl font-semibold">Vercel</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <SiVite className="text-5xl text-purple-600" />
                    <p className="text-slate-700 text-xl font-semibold">Vite</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <SiReactrouter className="text-5xl text-fuchsia-600" />
                    <p className="text-slate-700 text-xl font-semibold">React Router</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <SiAxios className="text-5xl text-indigo-600" />
                    <p className="text-slate-700 text-xl font-semibold">Axios</p>
                </div>
                </div>
            </div>
            )}

        </div>
        </div>
    )
    }

    function Stack({ icon, title }: { icon: string, title: string }) {
    return (
        <div className="flex flex-col items-center gap-2">
        <i className={`${icon} colored text-5xl`}></i>
        <p className="text-slate-700 text-xl font-semibold">{title}</p>
        </div>
    )
}

export default Stacks