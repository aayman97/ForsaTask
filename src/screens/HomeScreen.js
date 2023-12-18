import React, { useCallback, useEffect, useState } from "react";
import { Animated, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackgroundWrapper from "../components/BackgroundWrapper";
import Header from "../components/Header";
import OfferAlert from "../components/OfferAlert";
import R from "../resources/R";
import MainText from "../components/MainText";
import FirstSectionCard from "../components/FirstSectionCard";
import _baseUrls from "../network/_baseUrls.json";
import axios from "axios";
import endPoints from "../network/endPoints";
import SectorCard from "../components/SectorCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BrandCard from "../components/BrandCard";
import MyServicesTypesCard from "../components/MyServicesTypesCard";
import MyOffersCard from "../components/MyOffersCard";
import { useSelector } from "react-redux";
import { strings } from "../localization";

const { width } = Dimensions.get("screen");

const offersDummySection = [
  {
    color: "red",
    logo: R.images.logoTemp,
    thumbnail: R.images.thumbnailTemp,
    description: "Checkout latest offers",
  },
  {
    color: "blue",
    logo: R.images.logoTemp,
    thumbnail: R.images.thumbnailTemp,
    description: "Checkout latest offers 1",
  },
  {
    color: "green",
    logo: R.images.logoTemp,
    thumbnail: R.images.thumbnailTemp,
    description: "Checkout latest offers 2",
  },
  {
    color: "yellow",
    logo: R.images.logoTemp,
    thumbnail: R.images.thumbnailTemp,
    description: "Checkout latest offers 3",
  },
];

const OffersAds = ({ lang }) => {
  const flatListRef = React.useRef(null);

  const scrollX = React.useRef(new Animated.Value(0));

  useEffect(() => {
    const intervalId = setInterval(() => {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index:
          Math.abs(Math.round(scrollX.current._value / (width * 0.9))) === 3 ? 0 : Math.abs(Math.round(scrollX.current._value / (width * 0.9))) + 1,
      });
    }, 3000);

    // const listenerId = scrollX.current.addListener(({ value }) => {
    //   console.log("Current ScrollX Value:", value);
    // });

    return () => {
      clearInterval(intervalId);
      //   scrollX.current.removeListener(listenerId);
    };
  }, [scrollX]);

  return (
    <View
      style={{
        width: "100%",
        marginTop: 20,
      }}
    >
      <Animated.FlatList
        ref={flatListRef}
        inverted={lang === "en" ? false : true}
        data={offersDummySection}
        keyExtractor={(item, index) => item.color}
        style={{
          width: "100%",
        }}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX.current } } }], { useNativeDriver: false })}
        snapToInterval={width * 0.9}
        decelerationRate={"fast"}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        renderItem={({ item, index }) => {
          return <FirstSectionCard item={item} lang={lang} />;
        }}
      />
    </View>
  );
};

const HomeScreen = () => {
  const [sectors, setSectors] = useState(null);
  const [selectedSector, setSelectedSector] = useState(0);
  const [itemWidths, setItemWidths] = useState([]);
  const [brands, setBrands] = useState(null);
  const [myservicetypes, setMyServiceTypes] = useState(null);
  const [myOffers, setMyOffers] = useState(null);

  const sectorFlatlistRef = React.createRef(null);

  const lang = useSelector((state) => {
    return state.settingReducer.lang;
  });

  const changeFlexDirection = () => {
    return { flexDirection: lang === "en" ? "row" : "row-reverse" };
  };

  useEffect(() => {
    axios.get(_baseUrls.staging + endPoints.mySectors).then(
      (res) => {
        // console.log(res.data.results);
        setSectors([{ label: "All" }, ...res.data.results]);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  useEffect(() => {
    if (sectorFlatlistRef.current) {
      setBrands(null);
      sectorFlatlistRef.current.scrollToIndex({
        index: selectedSector,
        viewOffset: width * 0.45 - itemWidths[selectedSector] / 2,
      });
    }
  }, [selectedSector]);

  useEffect(() => {
    if (sectors !== null) {
      if (selectedSector === 0) {
        axios.get(_baseUrls.staging + endPoints.mystores).then(
          (res) => {
            // console.log(res.data.results);

            setBrands(res.data.results);
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        axios.get(_baseUrls.staging + endPoints.mystores + `?sector=` + sectors[selectedSector].value).then(
          (res) => {
            // console.log(res.data.results);

            setBrands(res.data.results);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }, [sectors, selectedSector]);

  useEffect(() => {
    axios.get(_baseUrls.staging + endPoints.myservicetypes).then(
      (response) => {
        // console.log(response.data.results);
        setMyServiceTypes(response.data.results);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  useEffect(() => {
    axios.get(_baseUrls.staging + endPoints.myOffers).then(
      (response) => {
        // console.log(response.data.results);
        setMyOffers(response.data.results);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <BackgroundWrapper>
      <Header />
      <OfferAlert lang={lang} />

      <OffersAds lang={lang} />
      <View style={[styles.textAndViewAllContainer, changeFlexDirection()]}>
        <MainText bold={true} size={18}>
          {strings[lang].all.Topbrands}
        </MainText>

        <TouchableOpacity>
          <MainText bold={false} size={12}>
            {strings[lang].all.Viewall}
          </MainText>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 10,
        }}
      >
        {sectors && (
          <FlatList
            ref={sectorFlatlistRef}
            inverted={lang === "en" ? false : true}
            data={sectors}
            horizontal
            keyExtractor={(item, index) => item.value}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <SectorCard
                  item={item}
                  index={index}
                  selectedSector={selectedSector}
                  setSelectedSector={setSelectedSector}
                  setItemWidths={setItemWidths}
                  lang={lang}
                />
              );
            }}
          />
        )}
      </View>

      <View
        style={{
          marginTop: 10,
          height: 74,
        }}
      >
        {brands && (
          <FlatList
            data={brands}
            horizontal
            inverted={lang === "en" ? false : true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item?.id}
            renderItem={({ item, index }) => {
              return <BrandCard item={item} index={index} lang={lang} />;
            }}
          />
        )}
      </View>

      <View style={[styles.textAndViewAllContainer, changeFlexDirection()]}>
        <MainText bold={true} size={18}>
          {strings[lang].all.RequestAdditionalLoan}
        </MainText>

        <TouchableOpacity>
          <MainText bold={false} size={18}>
            {strings[lang].all.Seeless}
          </MainText>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 20,
          width: "100%",
        }}
      >
        <ScrollView
        //   style={{
        //     height: 56 * 2,
        //   }}
        >
          <View style={styles.myservicetypesContainer}>
            <View style={styles.separator}>
              {myservicetypes &&
                myservicetypes.map((item, index) => {
                  if (index % 2 === 0) {
                    return <MyServicesTypesCard key={item.id} item={item} index={index} length={myservicetypes.length} lang={lang} />;
                  }
                })}
            </View>

            <View style={styles.separator}>
              {myservicetypes &&
                myservicetypes.map((item, index) => {
                  if (index % 2 !== 0) {
                    return <MyServicesTypesCard key={item.id} item={item} index={index} length={myservicetypes.length} lang={lang} />;
                  }
                })}
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={[styles.textAndViewAllContainer, changeFlexDirection()]}>
        <MainText bold={true} size={18}>
          {strings[lang].all.OfferSelect}
        </MainText>

        <TouchableOpacity>
          <MainText bold={false} size={18}>
            {strings[lang].all.SeeAll}
          </MainText>
        </TouchableOpacity>
      </View>

      {myOffers && (
        <View style={[styles.myservicetypesContainer, { marginTop: 20, paddingBottom: 10 }]}>
          <View style={[styles.separator, { alignItems: "center" }]}>
            {myOffers.map((item, index) => {
              if (index % 2 === 0) {
                return <MyOffersCard item={item} lang={lang} />;
              }
            })}
          </View>

          <View style={styles.separator}>
            {myOffers.map((item, index) => {
              if (index % 2 !== 0) {
                return <MyOffersCard item={item} lang={lang} />;
              }
            })}
          </View>
        </View>
      )}
    </BackgroundWrapper>
  );
};

const styles = StyleSheet.create({
  textAndViewAllContainer: {
    width: "100%",
    marginTop: 12,

    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  myservicetypesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
  },
  separator: {
    width: "50%",
    gap: 10,
    // alignItems: "center",
  },
});
export default HomeScreen;
