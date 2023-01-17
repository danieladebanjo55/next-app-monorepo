import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    color: 'white',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
  },
  categoryButtonText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  searchContainer: {
    marginBottom: 20,
    color: '#fff',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
  },
  newsItemContainer: {
    marginBottom: 20,
  },
  newsItemTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  newsItemDate: {
    color: '#a4a4a4',
    fontSize: 14,
  },
});

export default styles;
