/**
 * params: template - name of template, data - context for template
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="typings/react/react-global.d.ts"/>
/// <reference path="typings/meteor/meteor.d.ts"/>
BlazeInReact = (function (_super) {
    __extends(BlazeInReact, _super);
    function BlazeInReact() {
        _super.apply(this, arguments);
    }
    BlazeInReact.prototype.render = function () {
        return React.createElement("div", null);
    };
    BlazeInReact.prototype.componentDidMount = function () {
        var node = React.findDOMNode(this);
        var templateName = this.props.template;
        var data = this.props.data;
        if (!templateName || !Template[templateName]) {
            console.error("Template", templateName, "is missing.");
            return;
        }
        this.setState({ blazeView: Blaze.renderWithData(Template[templateName], data, node) });
    };
    BlazeInReact.prototype.componentWillUnmount = function () {
        if (this.state.blazeView) {
            Blaze.remove(this.state.blazeView);
            this.setState({ blazeView: undefined });
        }
    };
    return BlazeInReact;
})(React.Component);
