import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import Iconss from 'react-native-vector-icons/Octicons';
import IconEn from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/Feather';
import IconAn from 'react-native-vector-icons/AntDesign';


const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.topArea}>
        <View style={styles.topAreaInerTop}>
          <View style={styles.topAreaInerTop_Left}>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold', marginTop: 10, marginLeft: 15 }}>
              JazzCash
            </Text>
          </View>
          <View style={styles.topAreaInerTop_Mid}>
            <Icon style={{ marginTop: 10 }} name='question-circle-o' color='white' size={25} />

          </View>
          <View style={styles.topAreaInerTop_Right}>

            <Icon style={{ marginTop: 10 }} name='bell-o' color='white' size={25} />
          </View>



        </View>
        <View style={styles.topAreaInerBottom}>

          <View style={styles.topAreaInerBottom_Top}>
            <View style={styles.topAreaInerBottom_TopLeft}>
              <Text style={{ color: 'white', paddingLeft: 10, }}>
                <Icon name='user-circle' color='white' size={40} />
              </Text>
            </View>
            <View style={styles.topAreaInerBottom_TopMid}>
              <Text style={{ color: 'white', paddingLeft: 10, fontSize: 16 }}>
                Muhammad Junaid
              </Text>
              <Text style={{ color: 'lightgray', paddingLeft: 10, }}>
                <Icon name='gift' color='white' size={15} />   50,000 points
              </Text>
            </View>
            <View style={styles.topAreaInerBottom_TopRight}>
              <TouchableOpacity
                style={styles.buttonLoan}

              >
                <Text style={{ color: '#dec305' }} >Get Rs. 10,000 loan</Text>
              </TouchableOpacity>


            </View>

          </View>
          <View style={styles.topAreaInerBottom_Mid}>
            <Text style={{ color: '#dec305', fontSize: 30, paddingLeft: 10, fontWeight: 'bold' }}>
              Rs. 1,29,567<Text style={{ color: '#dec305', fontSize: 14, paddingLeft: 10, fontWeight: 'bold' }}>
                .00
              </Text>
            </Text>
          </View>
          <View style={styles.topAreaInerBottom_Bottom}>
            <View style={styles.topAreaInerBottom_BottomLeft}>
              <TouchableOpacity
                style={styles.buttonMoney}

              >
                <Text style={{ color: 'white' }}>  <Icon name='plus' color='white' size={15} />  Add Money</Text>
              </TouchableOpacity>


            </View>
            <View style={styles.topAreaInerBottom_BottomRight}>
              <TouchableOpacity
                style={styles.button}

              >
                <Text style={{ fontWeight: 'bold', color: 'white' }}>   <Icon name='credit-card' color='white' size={15} />  My Account</Text>
              </TouchableOpacity>

            </View>

          </View>


        </View>

      </View>



      <ScrollView style={styles.midArea}>

      
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 0.77 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 15, color: 'black' }}>
              My JazzCash
            </Text>
          </View>
          <View style={{ flex: 0.23 }}>
            <TouchableOpacity
              style={styles.buttonEdit}
            >
              <Text style={{ color: 'black' }}>  <IconEn name='edit' color='black' size={15} /> Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          
          <View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <Icons  name='md-paper-plane-outline' color='black' size={30} /> 
            </TouchableOpacity>
            <Text styles={styles.item}>
                Money Transfer
            </Text>
          </View>
          <View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <Icons name='receipt-outline' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Utility Bills
            </Text>
          </View><View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <IconEn name='tablet-mobile-combo' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Mobile Load & Packages
            </Text>
          </View><View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
         <Icon name='bank' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Banking & Finance
            </Text>
          </View>
        </View>



    
          <View >
            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 15,paddingTop:30, color: 'black' }}>
              Top Picks for you 
            </Text>
          </View>
         
        

        <View style={{ flexDirection: 'row' }}>
          
          <View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <IconF  name='users' color='black' size={30} /> 
            </TouchableOpacity>
            <Text styles={styles.item}>
                JazzCash
            </Text>
          </View>
          <View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <IconAn name='CodeSandbox' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Mobile
            </Text>
          </View><View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <Icons name='game-controller-outline' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Khelo Aur jeeto
            </Text>
          </View><View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
         <IconAn name='bank' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Rasst
            </Text>
          </View>
        </View>
        
      
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 0.77 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 15, color: 'black' }}>
              My JazzCash
            </Text>
          </View>
          <View style={{ flex: 0.23 }}>
            <TouchableOpacity
              style={styles.buttonEdit}
            >
              <Text style={{ color: 'black' }}>  <IconEn name='edit' color='black' size={15} /> Edit</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row' }}>
          
          <View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <Icons  name='md-paper-plane-outline' color='black' size={30} /> 
            </TouchableOpacity>
            <Text styles={styles.item}>
                Money Transfer
            </Text>
          </View>
          <View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <Icons name='receipt-outline' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Utility Bills
            </Text>
          </View><View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <IconEn name='tablet-mobile-combo' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Mobile Load & Packages
            </Text>
          </View><View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
         <Icon name='bank' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Banking & Finance
            </Text>
          </View>
        </View>



        <View >
            <Text style={{ fontSize: 18, fontWeight: 'bold', padding: 15,paddingTop:30, color: 'black' }}>
              Top Picks for you 
            </Text>
          </View>
         
        

        <View style={{ flexDirection: 'row' }}>
          
          <View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <IconF  name='users' color='black' size={30} /> 
            </TouchableOpacity>
            <Text styles={styles.item}>
                JazzCash
            </Text>
          </View>
          <View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <IconAn name='CodeSandbox' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Mobile
            </Text>
          </View><View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
               <Icons name='game-controller-outline' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Khelo Aur jeeto
            </Text>
          </View><View style={{ flex: 0.25, alignItems:'center'  }}>
            <TouchableOpacity
              style={styles.buttonItem}
            >
         <IconAn name='bank' color='black' size={30} />
            </TouchableOpacity>
            <Text styles={{paddingLeft:10}}>
              Rasst
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.bootomArea}>
        <View style={styles.bootomAreaInerTop}>

          <Iconss style={{ marginLeft: 10 }} name='horizontal-rule' color='gray' size={30} />

        </View>
        <View style={styles.bootomAreaInerBottom}>
          <View style={{ flex: 0.2 }}>
            <TouchableOpacity>
              <Icon style={{ marginLeft: 10 }} name='home' color='black' size={27} />
              <Text style={{ marginLeft: 5, fontSize: 12 }}>
                Home
              </Text>
            </TouchableOpacity>
          </View >
          <View style={{ flex: 0.2 }}>
            <TouchableOpacity>
              <Icons style={{ marginLeft: 10 }} name='location-outline' color='gray' size={27} />
              <Text style={{ marginLeft: 0, fontSize: 12 }}>
                Location
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.2 }}>
            <TouchableOpacity>
              <Icon style={{ marginLeft: 25 }} name='qrcode' color='gray' size={27} />

              <Text style={{ marginLeft: 10, fontSize: 12 }}>
                Scan QR
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.2 }}>
            <TouchableOpacity>
              <Icon style={{ marginLeft: 20 }} name='search' color='gray' size={27} />
              <Text style={{ marginLeft: 10, fontSize: 12 }}>
                Search
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.2 }}>
            <TouchableOpacity>
              <Icons style={{ marginLeft: 20 }} name='md-person-add-outline' color='gray' size={27} />
              <Text style={{ marginLeft: 0, fontSize: 12 }}>
                Invite{" & "}Earn
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>


    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3'


  },
  buttonLoan: {

    backgroundColor: '#404040',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    marginBottom: 10
  },
  button: {

    backgroundColor: '#6f6f6f',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    marginBottom: 10
  },
  buttonMoney: {

    backgroundColor: '#a42518',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    marginBottom: 10
  },
  buttonEdit: {

    backgroundColor: 'lightgray',
    alignItems: 'center',
    padding: 5,
    margin: 10,
    borderRadius: 20,
    marginBottom: 10
  },
  buttonItem: {

    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20 ,
    margin: 12,
    borderRadius: 15,
   
  },
  item: {

    backgroundColor: 'red',
    alignItems: 'center',
    padding: 18 ,
    margin: 12,
    borderRadius: 15,
   
  },
  topArea: {
    flex: 0.65,
    backgroundColor: '#232323',

    borderBottomLeftRadius: 25,


  },
  midArea: {
    flex: 0.10,
    backgroundColor: '#f3f3f3',

  },
  bootomArea: {
    flex: 0.25,
    backgroundColor: 'white',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  topAreaInerTop: {
    flex: 0.20,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginHorizontal: 3
  },
  topAreaInerBottom: {
    flex: 0.80,

  },
  topAreaInerTop_Left: {
    flex: 80,
  },
  topAreaInerTop_Right: {
    flex: 10,
  },
  topAreaInerTop_Mid: {
    flex: 10
  },
  topAreaInerBottom_Top: {
    flex: 0.33,
    flexDirection: 'row',
    paddingTop: 30
  },
  topAreaInerBottom_Mid: {
    flex: 0.33,
  }, topAreaInerBottom_Bottom: {
    flex: 0.34,
    flexDirection: 'row',
  },
  topAreaInerBottom_BottomLeft: {
    flex: 0.50,
  },
  topAreaInerBottom_BottomRight: {
    flex: 0.50,
  },
  topAreaInerBottom_TopLeft: {
    flex: 0.15,
  },
  topAreaInerBottom_TopMid: {
    flex: 0.40,
  },
  topAreaInerBottom_TopRight: {
    flex: 0.45,
  },
  bootomAreaInerTop: {
    flex: 0.40,
    alignItems: 'center',
    paddingRight: 20
  },
  bootomAreaInerBottom: {
    flex: 0.60,
    flexDirection: 'row',
  }
})
export default App;