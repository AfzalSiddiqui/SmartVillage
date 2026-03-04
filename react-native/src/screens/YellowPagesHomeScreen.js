import React, { useState, useCallback, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { getCategories, searchContacts } from '../data/yellowPagesData';
import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import ContactCard from '../components/ContactCard';

const YellowPagesHomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const debounceRef = useRef(null);
  const categories = getCategories();

  const handleSearch = useCallback((text) => {
    setQuery(text);
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!text.trim()) {
      setResults([]);
      return;
    }

    debounceRef.current = setTimeout(() => {
      setResults(searchContacts(text));
    }, 300);
  }, []);

  const isSearching = query.trim().length > 0;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerEmoji}>📒</Text>
        <Text style={styles.headerTitle}>Yellow Pages</Text>
        <Text style={styles.headerSub}>Village Service Directory</Text>
      </View>

      <View style={styles.content}>
        <SearchBar value={query} onChangeText={handleSearch} />

        {isSearching ? (
          results.length === 0 ? (
            <View style={styles.empty}>
              <Text style={styles.emptyEmoji}>🔍</Text>
              <Text style={styles.emptyText}>No results for "{query}"</Text>
            </View>
          ) : (
            <FlatList
              data={results}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ContactCard
                  contact={item}
                  showCategory
                  onPress={() =>
                    navigation.navigate('ContactDetail', { contactId: item.id })
                  }
                />
              )}
            />
          )
        ) : (
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
              <CategoryCard
                category={item}
                onPress={() =>
                  navigation.navigate('Category', { categoryId: item.id })
                }
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerEmoji: {
    fontSize: 40,
    marginBottom: 6,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  headerSub: {
    fontSize: 14,
    color: '#64B5F6',
    marginTop: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
  },
  row: {
    justifyContent: 'center',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
});

export default YellowPagesHomeScreen;
