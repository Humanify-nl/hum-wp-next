import Section from 'components/Section';

const FlexibleContent = ({ post, posts }) => {
  const flexContent = post?.acf?.flex_content || [];

  return (
    <div className="flexible-content">
      {flexContent.map((row, index) => {
        const layoutName = row.acf_fc_layout;
        const layoutMapping = require(`components/FlexibleContent/rows/${layoutName}.js`);
        const RowComponent = layoutMapping?.default;

        return RowComponent ? (
          <Section key={index} className={`flexible-row border basis-full ${row.acf_fc_layout}`}>
            <RowComponent row={row} posts={posts} />
          </Section>
        ) : null;
      })}
    </div>
  );
};

export default FlexibleContent;