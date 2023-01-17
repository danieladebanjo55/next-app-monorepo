import { useEffect, useState } from 'react';

import axios from 'axios';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const NewsScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('business');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=0ac8127c896947129ec7a77b14753850`,
      )
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [selectedCategory]);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  const filteredNews = news.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const styles = {
    container: {
      flex: 1,
      padding: 20,
    },
    categoriesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    categoryButton: {
      padding: 10,
      backgroundColor: 'indigo',
      fontColor: '#fff',
      opacity: 0.5,
      borderRadius: 5,
    },
    categoryText: {
      fontWeight: 'bold',
    },
    // searchInput: {
    //   color: 'white',
    //   padding: 10,
    //   borderWidth: 1,
    //   borderRadius: 15,
    //   borderColor: '#fff',
    //   marginBottom: 10,
    // },
    loadingIndicator: {
      marginTop: 20,
    },
    newsContainer: {
      flex: 1,
    },
    articleContainer: {
      marginBottom: 20,
    },
    articleTitle: {
      fontWeight: 'bold',
      marginBottom: 10,
    },
    articleDescription: {
      color: 'white',
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.categoriesContainer}>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => handleCategorySelection('business')}
        >
          <Text style={styles.categoryText}>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => handleCategorySelection('entertainment')}
        >
          <Text style={styles.categoryText}>Entertainment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => handleCategorySelection('health')}
        >
          <Text style={styles.categoryText}>Health</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryButton}
          onPress={() => handleCategorySelection('technology')}
        >
          <Text style={styles.categoryText}>Technology</Text>
        </TouchableOpacity>
      </View>
      {/* <TextInput
        style={styles.searchInput}
        onChangeText={setSearchTerm}
        value={searchTerm}
        placeholder="Search news..."
      /> */}
      {loading ? (
        <ActivityIndicator style={styles.loadingIndicator} />
      ) : error ? (
        <Text>{error.message}</Text>
      ) : (
        <ScrollView style={styles.newsContainer}>
          {filteredNews.length > 0 ? (
            filteredNews.map((article) => (
              <View key={article.url} style={styles.articleContainer}>
                <Text style={styles.articleTitle}>{article.title}</Text>
                <Text style={styles.articleDescription}>
                  {article.description}
                </Text>
              </View>
            ))
          ) : (
            <Text>No news found.</Text>
          )}
        </ScrollView>
      )}
    </View>
  );
};
export default NewsScreen;
