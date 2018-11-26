import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import PublicRouter from './router';
import AppLocale from './components/language';


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            locale: 'en'
        }
        if (localStorage.getItem('locale') == null) {
            localStorage.setItem('locale', this.state.locale)
        } else {
            this.state.locale = localStorage.getItem('locale')
        }
        this.changeLocale = this.changeLocale.bind(this)
    }
    changeLocale(value) {
        if (AppLocale[value] != undefined) {
            localStorage.setItem('locale', value)
            this.state.locale = value
            window.location.reload()
        }
    }
    render() {
        return (
            <LocaleProvider locale={AppLocale[this.state.locale].antd}>
                <IntlProvider locale={this.state.locale} messages={AppLocale[this.state.locale].messages}>
                    <Provider store={store}>
                        <PublicRouter history={history} changeLocale={this.changeLocale}></PublicRouter>
                    </Provider>
                </IntlProvider>
            </LocaleProvider>
        );
    }
}

export default App;