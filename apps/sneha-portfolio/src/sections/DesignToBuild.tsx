import { designToBuild } from '../data/portfolio';

export default function DesignToBuild() {
  return (
    <section id="design-to-build" className="section design-to-build">
      <div className="section-head">
        <h2>
          The design-to-build <em>shift</em>
        </h2>
        <p>Thirteen years of the gap closing. The judgment didn't change. The distance between thinking and making did.</p>
      </div>
      <div className="dtb-timeline">
        {designToBuild.map((item, i) => (
          <div key={item.year} className="dtb-item">
            <div className="dtb-year">{item.year}</div>
            <div className="dtb-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            {i < designToBuild.length - 1 && <div className="dtb-connector" />}
          </div>
        ))}
      </div>
    </section>
  );
}