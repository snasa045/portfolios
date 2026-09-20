import { currentWork } from '../data/portfolio';
import Reveal from '../components/Reveal';

export default function CurrentWork() {
  return (
    <section className="section section-now" id="now">
      <Reveal as="header" className="section-head">
        <h2>{currentWork.heading}</h2>
        <p>
          {currentWork.role} · {currentWork.org} · {currentWork.period}
        </p>
      </Reveal>
      <Reveal className="now-body" delay={90}>
        <p className="now-context">{currentWork.context}</p>
        {currentWork.body.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
        <p className="now-note">{currentWork.note}</p>
      </Reveal>
    </section>
  );
}
