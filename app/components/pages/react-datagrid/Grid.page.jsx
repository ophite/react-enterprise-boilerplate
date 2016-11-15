import { IconMenu, MenuItem } from 'react-toolbox/lib/menu';
import 'react-datagrid/index.css';
import DataGrid from 'react-datagrid/lib';
import { data } from './gridData'


const columns = [
    { name: 'index', title: '#', width: 150 },
    { name: 'firstName' },
    { name: 'country' },
    { name: 'grade' }
];


class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            groupingColumns: {
                'country': true,
                'grade': true
            }
        };
    }

    _getGroupingColumns() {
        const columns = [];
        for (const key in this.state.groupingColumns) {
            if (this.state.groupingColumns[key]) {
                columns.push(key);
            }
        }

        return columns;
    };

    handleOnColumnResize = (firstCol, firstSize, secondCol, secondSize) => {
        firstCol.width = firstSize;
        this.forceUpdate();
    };

    handleMenuColumnsGrouping = (menuItem) => {
        this.setState({
            ...this.state,
            groupingColumns: {
                ...this.state.groupingColumns,
                [menuItem]: !this.state.groupingColumns[menuItem]
            }
        });
    };

    renderMenuColumnsGrouping() {
        const menusView = columns
            .filter(c => c.name !== 'index')
            .map((c, index) => {
                return (
                    <MenuItem
                        key={index}
                        icon='fiber_manual_record'
                        value={c.name}
                        caption={c.name}
                    />
                );
            });

        return (
            <IconMenu onSelect={this.handleMenuColumnsGrouping} icon='more_vert' position='topLeft' menuRipple>
                {menusView}
            </IconMenu>
        );
    }

    renderGrid() {
        const groupedColumns = this._getGroupingColumns();
        if (!groupedColumns.length) {
            return (
                <DataGrid
                    idProperty='id'
                    dataSource={data}
                    columns={columns}
                    style={{height: 400}}
                    onColumnResize={this.handleOnColumnResize}
                />
            )
        }

        return (
            <DataGrid
                idProperty='id'
                dataSource={data}
                columns={columns}
                style={{height: 400}}
                groupBy={groupedColumns}
                onColumnResize={this.handleOnColumnResize}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderMenuColumnsGrouping()}
                {this.renderGrid()}
            </div>
        );
    }
}

export default App;