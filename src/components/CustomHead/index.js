import Head from 'next/head';

const CustomHead = (props) => {
  const { title, linkRel, linkPah, content } = props;
  return (
    <Head>
      <title>{title}</title>
      <link rel={linkRel} href={linkPah} />
      <meta content={content} />
    </Head>
  );
};

export default CustomHead;
