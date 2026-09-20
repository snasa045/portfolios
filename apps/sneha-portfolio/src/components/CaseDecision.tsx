import Reveal from './Reveal';

type Props = {
  id: string;
  index: number;
  heading: string;
  body: string[];
};

export default function CaseDecision({ id, index, heading, body }: Props) {
  return (
    <Reveal as="section" id={id} className="case-decision" direction="none">
      <span className="case-decision-number">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <p className="case-section-label">The decision that shaped the project</p>
        <h2>{heading}</h2>
        {body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </Reveal>
  );
}
