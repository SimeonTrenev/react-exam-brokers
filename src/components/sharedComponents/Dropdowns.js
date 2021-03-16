import React, { Component } from 'react';

import Select from './Select';


class Dropdowns extends Component{
    constructor(props){
        super(props)
    }

    // componentDidMount(){
    //     this.props.getOptions()
    // }

    render(){
        if(!this.props){
            return(<h2>Loading ....</h2>)
        }

        const { constructionTypeId, propertyTypeId, state, neighborhoodId } = this.props.defaultValues || {}

        return(
            <div className='row'>
                <div className='col-md-3'>
                <Select 
                    defaultValue= {constructionTypeId}
                    name={'constructionTypeId'}
                    label='Вид Строителство'
                    changeFn={this.props.changeHandler}
                    options={this.props.constructionTypes}
                />
                </div>

                <div className='col-md-3'>
                    <Select 
                        defaultValue= {propertyTypeId}
                        name={'propertyTypeId'}
                        label='Вид Имот'
                        changeFn={this.props.changeHandler}
                        options={this.props.propertyTypes}
                    />
                </div>

                <div className='col-md-3'>
                    <Select 
                        defaultValue= {state}
                        name={'state'}
                        label='Състояние'
                        changeFn={this.props.changeHandler}
                        options={this.props.states}
                    />
                </div>

                <div className='col-md-3'>
                    <Select 
                        defaultValue={neighborhoodId}
                        name={'neighborhoodId'}
                        label='Квартал'
                        changeFn={this.props.changeHandler}
                        options={this.props.neighborhoods}
                    />
                </div>
            </div>
        )
    }
}

export default Dropdowns