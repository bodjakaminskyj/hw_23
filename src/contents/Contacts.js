import React, { Component } from 'react'
import {Contact} from './Contact'
import search from './images/search.png'

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

class Contacts extends Component{

    state = { 
        contacts : contacts,
        search : "",
        male: 'male',
        female: "female",
        none: undefined,
        isCheckedMale: true,
        isCheckedFemale: true,
        isCheckedUnknown: true
        

    }
    

    toggleChange = (e) => {
        const {name, checked} = e.target
        this.setState({
            [name]: checked
        }, () => {
            if(this.state.isCheckedMale === true && this.state.isCheckedFemale === true && this.state.isCheckedUnknown === true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "male" || obj.gender === "female" || !obj.gender) {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale !== true && this.state.isCheckedFemale === true && this.state.isCheckedUnknown === true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "female" || !obj.gender) {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale !== true && this.state.isCheckedFemale !== true && this.state.isCheckedUnknown === true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(!obj.gender) {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale !== true && this.state.isCheckedFemale !== true && this.state.isCheckedUnknown !== true) {
                this.setState({contacts: []})
            } else if(this.state.isCheckedMale === true && this.state.isCheckedFemale !== true && this.state.isCheckedUnknown !== true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "male") {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale === true && this.state.isCheckedFemale === true && this.state.isCheckedUnknown !== true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "male" || obj.gender === "female") {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale !== true && this.state.isCheckedFemale === true && this.state.isCheckedUnknown !== true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "female") {
                        return true
                    }else {
                        return false
                    }
                })})
            } else if(this.state.isCheckedMale === true && this.state.isCheckedFemale !== true && this.state.isCheckedUnknown === true) {
                this.setState({contacts: contacts.filter((obj) => {
                    if(obj.gender === "male" || !obj.gender) {
                        return true
                    }else {
                        return false
                    }
                })})
            } else {
                this.setState({contacts: contacts})
            }
        })
    }
                  
        handleSearchChange = (event) => {
            this.setState({search: event.target.value}, () => {
                const searchResult = contacts.filter((obj) => {
                    const contactFirstName = obj.firstName.toLowerCase().includes(this.state.search.toLowerCase());
                    const contactLastName = obj.lastName.toLowerCase().includes(this.state.search.toLowerCase());
                    const contactPhone = obj.phone.toLowerCase().includes(this.state.search.toLowerCase());
                    if(contactFirstName || contactLastName || contactPhone) {
                        return true
                    } else {
                        return false
                    }
                })
                if(this.state.search.length < 1) {
                    this.setState({contacts: contacts})
                } else {
                    if(searchResult.length > 0) {
                        this.setState({contacts: searchResult})
                    } else {
                        this.setState({contacts: []})
                    }
                }
            })
        }
        
            
    render(){
       
        return(
        <div>
            
            
           <nav>
            <div className="search-panel">
                <img className="search" src={search} alt="search"/>
                <input id="search-input" type='text' value={this.state.search} onChange={this.handleSearchChange} placeholder="Пошук"/>
                <div className="M">
                    <input name="isCheckedMale" type="checkbox" defaultChecked onChange={this.toggleChange} />
                    <label>Ч</label>
                </div>
                <div className="F">
                    <input name="isCheckedFemale" type="checkbox" defaultChecked onChange={this.toggleChange}/>
                    <label>Ж</label>
                </div>
                <div className="N">
                    <input name="isCheckedUnknown" type="checkbox" defaultChecked onChange={this.toggleChange}/>
                    <label>ХЗ</label>
                </div>
                </div>
            </nav>
            
            
            <div className="contacts">
            {this.state.contacts.map(contact => (
                    <Contact contact={contact} key={contact.firstName}/>
                ))}
            </div>
        </div>
        )
    }
}
export default Contacts;