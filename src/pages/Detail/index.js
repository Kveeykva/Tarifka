import { Text, ActivityIndicator, FlatList, Linking } from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import ENV from '../../../env';
import DetailCard from '../../components/cards/DetailCard';

const Detail = ({ route }) => {
    const { idMeal } = route.params;

    const { data, loading, error } = useFetch(`${ENV.API_DETAIL}${idMeal}`);

    const renderDetail = ({ item }) => (
        <DetailCard
            detail={item}
            onSelect={() => Linking.openURL(item.strYoutube)}
        />
    );

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }
    return <FlatList data={data.meals} renderItem={renderDetail} />;
};

export default Detail;