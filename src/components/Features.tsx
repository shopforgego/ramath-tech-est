import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Headphones, CheckCircle } from 'lucide-react';
import { storeConfig } from '../config/store';

export const Features: React.FC = () => {
  return (
    <section className="py-6 border-b border-current/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0f172a] border border-blue-950 hover:border-blue-500/60 shadow-lg hover:shadow-blue-500/10 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-blue-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">ضمان رسمي سنتين</h4>
              <p className="text-[11px] opacity-70 mt-0.5">استبدال فوري عند وجود أي عيب مصنعي</p>
            </div>
          </div>

          <div className="bg-[#0f172a] border border-blue-950 hover:border-blue-500/60 shadow-lg hover:shadow-blue-500/10 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-blue-400">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">شواحن وإلكترونيات أصلية</h4>
              <p className="text-[11px] opacity-70 mt-0.5">معتمدة من هيئة المواصفات والمقاييس</p>
            </div>
          </div>

          <div className="bg-[#0f172a] border border-blue-950 hover:border-blue-500/60 shadow-lg hover:shadow-blue-500/10 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-blue-400">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">شحن فوري بنفس اليوم</h4>
              <p className="text-[11px] opacity-70 mt-0.5">توصيل فائق السرعة لكافة المناطق</p>
            </div>
          </div>

          <div className="bg-[#0f172a] border border-blue-950 hover:border-blue-500/60 shadow-lg hover:shadow-blue-500/10 p-4 rounded-2xl flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0 text-blue-400">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xs font-bold">دعم فني واستشارات</h4>
              <p className="text-[11px] opacity-70 mt-0.5">فريق متخصص لمساعدتك في اختيار القطعة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
