import { Droplet, ShieldCheck, Sparkles, Leaf } from "lucide-react";

export default function AlimentacaoNatural() {
  return (
    <section className="w-full bg-emerald-100 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center gap-4">
            <Droplet size={40} className="text-emerald-600" />
            <h3 className="text-xl font-bold text-emerald-600">Mais hidratação natural</h3>
            <p className="text-sm text-emerald-600">
              Alimentos naturais possuem maior quantidade de água, ajudando
              na hidratação do organismo e no bom funcionamento dos rins.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center gap-4">
            <ShieldCheck size={40} className="text-emerald-600" />
            <h3 className="text-xl font-bold text-emerald-600">Fortalece a imunidade</h3>
            <p className="text-sm text-emerald-600">
              Ingredientes frescos e naturais contribuem para um sistema
              imunológico mais forte e equilibrado.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center gap-4">
            <Sparkles size={40} className="text-emerald-600" />
            <h3 className="text-xl font-bold text-emerald-600">Pelo mais bonito e saudável</h3>
            <p className="text-sm text-emerald-600">
              Vitaminas e nutrientes essenciais ajudam a manter o pelo mais
              brilhante, macio e a pele saudável.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center gap-4">
            <Leaf size={40} className="text-emerald-600" />
            <h3 className="text-xl font-bold text-emerald-600">Sem conservantes artificiais</h3>
            <p className="text-sm text-emerald-600">
              Alimentação sem corantes e conservantes artificiais, promovendo
              melhor digestão e mais qualidade de vida.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
