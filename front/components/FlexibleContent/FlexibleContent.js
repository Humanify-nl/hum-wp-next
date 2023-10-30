import Section from 'components/Section';

const FlexibleContent = ({ post }) => {

  const flexRows = post?.acf.flex_content?.map((row, index) => {

    // LayoutName === acf 'name' field in the flex row   
    const layoutName = row.acf_fc_layout;
    const layoutMapping = require(`components/FlexibleContent/rows/${layoutName}.js`);

    if (layoutMapping) {
      const RowComponent = layoutMapping.default;

      return (
        <Section key={index} className={`flexible-row border basis-full ${row.acf_fc_layout}`}>
          <RowComponent row={row} />
        </Section>
      );
    }

    return null;
  });

  return (
    <div className="flexible-content">
      {flexRows}
    </div>
  );
};

export default FlexibleContent;
