import { View, StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const WeekCalendar = () => (
    <View style={styles.container}>
        <CalendarStrip
            scrollable
            style={{ height: 60 }}
            calendarHeaderStyle={{ color: '#393A39' }}
            dateNumberStyle={{ color: '#393A39' }}
            dateNameStyle={{ color: '#393A39' }}
            iconContainer={{ flex: 0.1 }}
            updateWeek={true}
        />
    </View>
);

const styles = StyleSheet.create({
    container: { flex: 1 }
});


export default WeekCalendar