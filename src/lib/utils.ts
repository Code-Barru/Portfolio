type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, style: DateStyle = 'medium', locales = 'en'): string {
	const formatter = new Intl.DateTimeFormat(locales, {
		dateStyle: style
	});
	return formatter.format(new Date(date));
}
