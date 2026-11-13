import { Sparkles } from "lucide-react";

export default function TravelBudget() {
  const budgetItems = [
    { label: "Stays", amount: "LKR 32,000", percentage: "w-[45%]" },
    { label: "Experiences", amount: "LKR 24,000", percentage: "w-[34%]" },
    { label: "Transport", amount: "LKR 14,000", percentage: "w-[20%]" },
  ];

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">Travel budget</h2>
        <span className="text-xs text-slate-400 font-medium">Ella escape</span>
      </div>

      {/* Main Budget Card */}
      <div className="bg-white rounded-2xl border border-sky-100 p-6 shadow-xs flex flex-col justify-between space-y-6">
        
        {/* Top summary row */}
        <div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">
              Estimated trip cost
            </span>
            <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              On budget
            </span>
          </div>

          <div className="mt-2">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              LKR 70,000
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              of your LKR 90,000 budget · for 2 travelers
            </p>
          </div>
        </div>

        {/* Category breakdown progress bars */}
        <div className="space-y-4">
          {budgetItems.map((item, index) => (
            <div key={index} className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-600 font-medium">{item.label}</span>
                <span className="text-slate-900 font-semibold">{item.amount}</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className={`h-full bg-sky-500 rounded-full ${item.percentage}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom extras note */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
          <Sparkles className="w-4 h-4 text-sky-500 shrink-0" />
          <span>LKR 20,000 left for little extras.</span>
        </div>

      </div>
    </div>
  );
}