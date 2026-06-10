import 'package:flutter/material.dart';

import '../../theme/xplore_theme.dart';

class AuthBackground extends StatelessWidget {
  const AuthBackground({required this.child, super.key});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    final dark = Theme.of(context).brightness == Brightness.dark;
    return DecoratedBox(
      decoration: BoxDecoration(
        color: Theme.of(context).scaffoldBackgroundColor,
        gradient: RadialGradient(
          center: const Alignment(0.9, -0.95),
          radius: 1.2,
          colors: [
            XploreColors.cinnamon.withValues(alpha: dark ? 0.18 : 0.08),
            Theme.of(context).scaffoldBackgroundColor,
          ],
        ),
      ),
      child: Stack(
        children: [
          Positioned(
            top: -120,
            right: -150,
            child: _Ring(size: 320, opacity: dark ? 0.13 : 0.18),
          ),
          Positioned(
            bottom: 70,
            left: -155,
            child: _Ring(size: 280, opacity: dark ? 0.09 : 0.13),
          ),
          Positioned.fill(
            child: CustomPaint(
              painter: _DottedPathPainter(
                color: XploreColors.cinnamon.withValues(
                  alpha: dark ? 0.10 : 0.14,
                ),
              ),
            ),
          ),
          child,
        ],
      ),
    );
  }
}

class _Ring extends StatelessWidget {
  const _Ring({required this.size, required this.opacity});

  final double size;
  final double opacity;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        border: Border.all(
          width: 2,
          color: XploreColors.cinnamon.withValues(alpha: opacity),
        ),
      ),
    );
  }
}

class _DottedPathPainter extends CustomPainter {
  const _DottedPathPainter({required this.color});

  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color;
    for (double y = 40; y < size.height; y += 28) {
      for (double x = (y ~/ 28).isEven ? 24 : 10; x < size.width; x += 28) {
        canvas.drawCircle(Offset(x, y), 1.25, paint);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _DottedPathPainter oldDelegate) {
    return oldDelegate.color != color;
  }
}
