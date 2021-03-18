function formatTime(unit: Number, length: Number = 2): String {
	return unit.toString().padStart(length, '0');
}

export { formatTime };
