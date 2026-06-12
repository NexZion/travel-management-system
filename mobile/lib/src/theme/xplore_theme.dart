import 'package:flutter/material.dart';

class XploreColors {
  static const cinnamon = Color(0xFFAC683F);
  static const cinnamonDark = Color(0xFF925430);
  static const ivory = Color(0xFFFAF9F5);
  static const cream = Color(0xFFEEDCC5);
  static const ink = Color(0xFF1F2937);
  static const graphite = Color(0xFF171717);
  static const muted = Color(0xFF6B7280);
}

class XploreTheme {
  static ThemeData light() {
    final scheme = ColorScheme.fromSeed(
      seedColor: XploreColors.cinnamon,
      brightness: Brightness.light,
      primary: XploreColors.cinnamon,
      surface: XploreColors.ivory,
    );

    return _base(scheme).copyWith(
      scaffoldBackgroundColor: XploreColors.ivory,
      cardColor: Colors.white,
      inputDecorationTheme: _inputDecoration(scheme, Colors.white),
    );
  }

  static ThemeData dark() {
    final scheme = ColorScheme.fromSeed(
      seedColor: XploreColors.cinnamon,
      brightness: Brightness.dark,
      primary: XploreColors.cinnamon,
      surface: const Color(0xFF111111),
    );

    return _base(scheme).copyWith(
      scaffoldBackgroundColor: const Color(0xFF111111),
      cardColor: const Color(0xFF1A1A1A),
      inputDecorationTheme: _inputDecoration(scheme, const Color(0xFF202020)),
    );
  }

  static ThemeData _base(ColorScheme scheme) {
    return ThemeData(
      useMaterial3: true,
      colorScheme: scheme,
      fontFamily: 'Plus Jakarta Sans',
      textTheme: const TextTheme(
        displaySmall: TextStyle(fontWeight: FontWeight.w800, letterSpacing: 0),
        headlineMedium: TextStyle(
          fontWeight: FontWeight.w800,
          letterSpacing: 0,
        ),
        titleLarge: TextStyle(fontWeight: FontWeight.w800, letterSpacing: 0),
        titleMedium: TextStyle(fontWeight: FontWeight.w700, letterSpacing: 0),
        bodyMedium: TextStyle(fontWeight: FontWeight.w500, letterSpacing: 0),
        labelLarge: TextStyle(fontWeight: FontWeight.w800, letterSpacing: 0.8),
      ),
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          backgroundColor: XploreColors.cinnamon,
          foregroundColor: Colors.white,
          minimumSize: const Size.fromHeight(56),
          shape: const StadiumBorder(),
          textStyle: const TextStyle(
            fontSize: 12,
            fontWeight: FontWeight.w800,
            letterSpacing: 1.1,
          ),
        ),
      ),
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          minimumSize: const Size.fromHeight(54),
          shape: const StadiumBorder(),
          side: BorderSide(color: scheme.outlineVariant),
          textStyle: const TextStyle(fontWeight: FontWeight.w800),
        ),
      ),
      iconButtonTheme: IconButtonThemeData(
        style: IconButton.styleFrom(
          backgroundColor: scheme.surface.withValues(alpha: 0.88),
          foregroundColor: scheme.onSurface,
          shape: const CircleBorder(),
        ),
      ),
    );
  }

  static InputDecorationTheme _inputDecoration(
    ColorScheme scheme,
    Color fillColor,
  ) {
    final border = OutlineInputBorder(
      borderRadius: BorderRadius.circular(28),
      borderSide: BorderSide(
        color: scheme.outlineVariant.withValues(alpha: 0.7),
      ),
    );

    return InputDecorationTheme(
      filled: true,
      fillColor: fillColor,
      contentPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 17),
      border: border,
      enabledBorder: border,
      focusedBorder: border.copyWith(
        borderSide: const BorderSide(color: XploreColors.cinnamon, width: 1.4),
      ),
      errorBorder: border.copyWith(
        borderSide: BorderSide(color: scheme.error, width: 1.2),
      ),
      focusedErrorBorder: border.copyWith(
        borderSide: BorderSide(color: scheme.error, width: 1.4),
      ),
      labelStyle: TextStyle(
        color: scheme.onSurfaceVariant,
        fontWeight: FontWeight.w700,
      ),
      hintStyle: TextStyle(
        color: scheme.onSurfaceVariant.withValues(alpha: 0.66),
      ),
    );
  }
}
