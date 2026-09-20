import { currentWork } from '../data/portfolio';

export default function CurrentWork() {
  return (
    <section className="section section-now" id="now">
      <header className="section-head">
        <h2>{currentWork.heading}</h2>
        <p>
          {currentWork.role} · {currentWork.org} · {currentWork.period}
        </p>
      </header>
      <div className="now-body">
        <p className="now-context">{currentWork.context}</p>
        {currentWork.body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
        <p className="now-note">{currentWork.note}</p>
      </div>
    </section>
  );
}
