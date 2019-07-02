import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './jtree.css';
export class JTree extends Component {
    
    static propTypes = {
        dataProvider: PropTypes.arrayOf(PropTypes.object),
        labelFunction: PropTypes.func,
        hasChildren: PropTypes.func,
        getChildren: PropTypes.func,
        iconFunction: PropTypes.func,
        isEnabled: PropTypes.func,
        selectedItem: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.state = {
            //dataProvider: props.dataProvider,
            ...props
        }
    }

    onItemClick = selectedItem => {
        this.setState({
            selectedItem
        });
    }

    render() {
        let state = this.state;
        let dataProvider = state.dataProvider || [];
        return (
            <div className="j-tree">
                <ul>
                    {dataProvider.map((data, index)=><JTreeNode key={index} data={data} {...state} parent={null} onItemClick={this.onItemClick} />)}
                </ul>
            </div>
        );
    }
}

/**
 * tree node element
 */
class JTreeNode extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            data: props.data,
            isChildVisible: false,
            ...props
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.selectedItem !== nextProps.selectedItem) {
            this.setState({selectedItem: nextProps.selectedItem});
        }
    }
    
    labelFunction = (item, parent, dataProvider) => {
        return item.label || item.text || item.name;
    }

    hasChildren = item => {
        return item.hasOwnProperty('children') || item.hasOwnProperty('childs') || item.hasOwnProperty('nodes')
    }

    getChildren = item => {
        return item.children || item.childs || item.nodes;
    }

    onItemIconClick = item => {
        let isChildVisible = !this.state.isChildVisible;
        this.setState({
            isChildVisible
        });
    }

    onItemLabelClick = item => {
        let isEnabled = this.state.isEnabled || this.isEnabled;
        if(!isEnabled(item)) {
            return;
        }

        this.props.onItemClick && this.props.onItemClick(item); 
        let isChildVisible = !this.state.isChildVisible;
        this.setState({
            isChildVisible
        });
    }

    iconFunction = (isTree, isChildVisible, item, parent, dataProvider) => {
        if(isTree) {
            return <span>{isChildVisible ? '☟' : '☞'}</span>;
        } else {
            return <span>❅</span>;
        }
    }

    isEnabled = item => {
        return item.hasOwnProperty('enabled') ? item.enabled : true;
    }

    render() {
        let state = this.state;

        let labelFunction = state.labelFunction || this.labelFunction;
        let hasChildren = state.hasChildren || this.hasChildren;
        let getChildren = state.getChildren || this.getChildren;
        let iconFunction = state.iconFunction || this.iconFunction;
        let isEnabled = state.isEnabled || this.isEnabled;

        let data = state.data || {};
        let isTree = hasChildren(data);
        let isChildVisible = state.isChildVisible;
        let enabled = isEnabled(data);
        let isSelected = data === state.selectedItem;
        let nodeClassName = [];
        nodeClassName.push(enabled ? 'j-tree-node' : 'j-tree-node-diabled');
        if(isSelected) {
            nodeClassName.push('j-tree-node-selected');
        }
        nodeClassName = nodeClassName.join(' ');

        return (
            <li>
                <div className={nodeClassName}>
                    <div className="j-tree-node-icon-holder" onClick={()=>this.onItemIconClick(data)}>
                        {iconFunction(isTree, isChildVisible, data, state.parent, state.dataProvider)}
                    </div>
                    <div className="j-tree-node-label-holder" onClick={()=>this.onItemLabelClick(data)}>
                        {labelFunction(data, state.parent, state.dataProvider)}
                    </div>
                </div>
                {
                isTree && 
                isChildVisible && 
                <div className="j-tree-leafs">
                    <ul>
                    {
                        getChildren(data).map((child, index)=><JTreeNode key={index} data={child} parent={data} onItemClick={this.props.onItemClick} />)
                    }
                    </ul>
                </div>
                }
            </li>
        );
    }
}

export default JTree;