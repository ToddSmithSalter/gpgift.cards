import Head from 'next/head'
import Layout from '../../components/layout';
import React from 'react';
const formEmbedIframe = '<iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrKHXZqtW0krNGm4?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="959" style="background: transparent; border: 1px solid #ccc;"></iframe>';

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}


export default function addBusiness() {
    return (
        <Layout>
            <Head>
                <title>Add A Business - Grande Prairie Gift Cards</title>
            </Head>

            <div className="pb-12">
                <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
                <Iframe iframe={formEmbedIframe} />
            </div>
        </Layout>
    )
}
