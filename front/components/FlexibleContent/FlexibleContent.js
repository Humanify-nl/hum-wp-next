import Img from 'components/Img';
import Section from 'components/Section';

const FlexibleContent = ({ post }) => {

  const flexRows = post.acf.flex_content.map((row, index) => {

    const layoutMapping = {
      image: row.content_image ? (
        <Img
          key={index}
          src={row.content_image.url}
          alt="Picture"
          classNameImg="aspect-4/3 rounded"
        />
      ) : null,
      content: row.content_textarea ? (
        <p key={index}>{row.content_textarea}</p>
      ) : null,
      // Add more mappings for other acf_fc_layout types if needed
    };

    const flexLayout = layoutMapping[row.acf_fc_layout] || null;

    return (
      <Section key={index} className={`flexible-row border basis-full ${row.acf_fc_layout}`}>
        {flexLayout}
      </Section>
    );

  });

  return (
    <div className="flexible-content">      
      <h2 className="text-2xl mx-auto max-w-6xl">Flexible content</h2>
      {flexRows}
    </div>
  );
};

export default FlexibleContent;