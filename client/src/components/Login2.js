import React from 'react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

mobiscroll.settings = {
    theme: 'material',
    themeVariant: 'light'
};

class ListItem extends React.Component {
    render() {
        return <li data-icon={this.props.item.icon}>{this.props.item.text}</li>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: [{
                id: 1,
                text: 'Wifi',
                icon: 'connection'
            }, {
                id: 2,
                text: 'Location',
                icon: 'location'
            }, {
                id: 3,
                text: 'Sound',
                icon: 'volume-medium'
            }, {
                id: 4,
                text: 'Rotation',
                icon: 'fa-rotate-left'
            }, {
                id: 5,
                text: 'Bluetooth',
                icon: 'ion-bluetooth'
            }, {
                id: 6,
                text: 'Settings',
                icon: 'cogs'
            }, {
                id: 7,
                text: 'Reading',
                icon: 'user4'
            }, {
                id: 8,
                text: 'Data',
                icon: 'download'
            }, {
                id: 9,
                text: 'Eye comfort',
                icon: 'eye'
            }, {
                id: 10,
                text: 'Screenshot',
                icon: 'mobile'
            }, {
                id: 11,
                text: 'Airplane Mode',
                icon: 'airplane'
            }, {
                id: 12,
                text: 'Alarm',
                icon: 'alarm2'
            }, {
                id: 13,
                text: 'Messages',
                icon: 'material-message'
            }, {
                id: 14,
                text: 'Weather',
                icon: 'meteo-weather4'
            }, {
                id: 15,
                text: 'Camera',
                icon: 'camera'
            }, {
                id: 16,
                text: 'Edit',
                icon: 'material-photo-size-select-large'
            }]
        };
    }
    
    showPopup = () => {
        this.refs.Popup.instance.show();
    }
    
    showList = () => {
        this.refs.list.instance.show();
    }
    
    onSet = (event, inst) => {
        this.setState({ checked: this.state.radio });
    }
    
    myRadioChanged = (event, inst) => {
        this.setState({ radio: event.target.value });
    }
    
    onItemTap = (event, inst) => {
        this.refs.scrollable.instance.hide();
        mobiscroll.toast({
            message: event.target.innerText + ' clicked'
        });
    }
    
    showScrollable = () => {
        this.refs.scrollable.instance.show();
    }
    
    render() {
        return (
            <div>
                <mobiscroll.Form>
                    <mobiscroll.FormGroup>
                        <mobiscroll.FormGroupTitle>Without return value</mobiscroll.FormGroupTitle>
                        <div className="mbsc-btn-group-block">
                            <mobiscroll.Button onClick={this.showPopup}>Show Popup</mobiscroll.Button>
                        </div>
                    </mobiscroll.FormGroup>
                    <mobiscroll.FormGroup>
                        <mobiscroll.FormGroupTitle>With return value</mobiscroll.FormGroupTitle>
                        <mobiscroll.Input onClick={this.showList} value={this.state.checked} placeholder="Please Select..." readOnly>Update</mobiscroll.Input>
                    </mobiscroll.FormGroup>
                    <mobiscroll.FormGroup>
                        <mobiscroll.FormGroupTitle>With scrollable content</mobiscroll.FormGroupTitle>
                        <div className="mbsc-btn-group-block">
                            <mobiscroll.Button onClick={this.showScrollable}>Show Popup</mobiscroll.Button>
                        </div>
                    </mobiscroll.FormGroup>
                </mobiscroll.Form>
                <mobiscroll.Popup
                    ref="Popup"
                    display="center"
                >
                    <div className="mbsc-align-center mbsc-padding">
                        <img src="https://img.mobiscroll.com/demos/f1.png" />
                        <h3>Liza Taylor</h3>
                        <p>liza.taylor@mobiscroll.com <br /> (202) 555-0127</p>
                    </div>
                </mobiscroll.Popup>
                <mobiscroll.Popup
                    ref="list"
                    display="center"
                    onSet={this.onSet}
                >
                    <mobiscroll.Form>
                        <mobiscroll.FormGroup inset>
                            <p>Some updates are available for you. <br /> When would you like to install them?</p>
                        </mobiscroll.FormGroup>
                        <mobiscroll.FormGroup inset>
                            <mobiscroll.Radio name="update" value="Right now" checked={this.state.radio === 'Right now'} onChange={this.myRadioChanged}>Right now</mobiscroll.Radio>
                            <mobiscroll.Radio name="update" value="Later on today" checked={this.state.radio === 'Later on today'} onChange={this.myRadioChanged}>Later on today</mobiscroll.Radio>
                            <mobiscroll.Radio name="update" value="Remind me tomorrow" checked={this.state.radio === 'Remind me tomorrow'} onChange={this.myRadioChanged}>Remind me tomorrow</mobiscroll.Radio>
                        </mobiscroll.FormGroup>
                    </mobiscroll.Form>
                </mobiscroll.Popup>
                <mobiscroll.Popup
                    ref="scrollable"
                    display="center"
                    scrollLock={false}
                    cssClass="mbsc-no-padding md-content-scroll"
                    buttons={[]}
                >
                    <mobiscroll.Listview 
                        enhance={true}
                        swipe={false}
                        itemType={ListItem}
                        data={this.state.options}
                        onItemTap={this.onItemTap}
                    />
                </mobiscroll.Popup>
            </div>
        );
    }    
}

export default Login2;