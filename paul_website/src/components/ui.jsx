import React from "react";

export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Container = ({ children, className = "" }) => (
  <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

export const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-12 sm:py-16">
    <Container>
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
        {subtitle && <p className="text-sm sm:text-base text-neutral-400 mt-2">{subtitle}</p>}
      </div>
      <div className="grid gap-6">{children}</div>
    </Container>
  </section>
);

export const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900 px-2.5 py-0.5 text-xs font-medium text-neutral-200">
    {children}
  </span>
);

export const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-neutral-800 bg-neutral-950 shadow-sm ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ title, meta, right }) => (
  <div className="p-5 border-b border-neutral-800 flex items-start justify-between gap-4">
    <div>
      <h3 className="text-lg font-semibold leading-tight text-white">{title}</h3>
      {meta && <p className="text-sm text-neutral-400 mt-1">{meta}</p>}
    </div>
    {right}
  </div>
);

export const CardBody = ({ children }) => <div className="p-5 text-neutral-200">{children}</div>;
