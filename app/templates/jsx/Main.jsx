var Main = React.createClass({
    render: function() {
        return (
            <div id="main">
                <Controls />
                <Chat />
            </div>
        );
    }
});

// React initialization
React.render(
    <Main />,
    document.body
);
