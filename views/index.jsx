var React = require('react');
var PropTypes = require('prop-types');
var Layout = require('./layout');


class Index extends React.Component {
    render() {
        return (
            <Layout title={this.props.title}>
                <div>
                    <h1>Oscar Bäck</h1>
                    <h3>Startup with express</h3>
                </div>
            </Layout>
        );
    }
}

Index.propTypes = {
  title: PropTypes.string,
};

module.exports = Index;
