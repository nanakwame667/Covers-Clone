import {Text, View} from "react-native";
import ViewItem from "./base/ViewItem";
import FlatRadioButtonGroup from "./view/flat-radio-button-group";
import React from "react";


function List() {
    return (
        <View style={{flex: 1}}>
        {
            [
                'dry cough',
                'Tiredness',
                'Sore Throat',
                'Fever',
                'Aches and Pain',
                'Shortness of breath'
            ].map(name=>{

                return (
                    <ViewItem
                        backgroundColor={'white'}
                        paddingHorizontal={8}
                    >
                        <Text style={{fontWeight: 'bold', fontSize: 20, marginStart: 8}}>
                            {name}
                        </Text>
                        <FlatRadioButtonGroup
                            orientation={'horizontal'}
                            contentGravity={'center'}
                            onChange={({key, label}) => {
                                console.log('save to tate')
                            }}
                            height={90}
                        />
                    </ViewItem>
                )
            })

        }
    </View>

)
}