import 'package:flutter/material.dart';

import '../../theme/xplore_theme.dart';

class AuthScaffold extends StatelessWidget {
  const AuthScaffold({
    required this.child,
    required this.previewTitle,
    required this.previewSubtitle,
    super.key,
  });

  final Widget child;
  final String previewTitle;
  final String previewSubtitle;

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    final isWide = width >= 820;

    return Scaffold(
      backgroundColor: Colors.transparent,
      body: SafeArea(
        child: Center(
          child: SingleChildScrollView(
            padding: EdgeInsets.symmetric(
              horizontal: width < 380 ? 18 : 24,
              vertical: 24,
            ),
            child: ConstrainedBox(
              constraints: BoxConstraints(maxWidth: isWide ? 980 : 460),
              child: isWide
                  ? Row(
                      children: [
                        Expanded(
                          child: _TravelPreview(
                            title: previewTitle,
                            subtitle: previewSubtitle,
                          ),
                        ),
                        const SizedBox(width: 32),
                        Expanded(child: _AuthCard(child: child)),
                      ],
                    )
                  : Column(
                      children: [
                        _MobileHero(
                          title: previewTitle,
                          subtitle: previewSubtitle,
                        ),
                        const SizedBox(height: 18),
                        _AuthCard(child: child),
                      ],
                    ),
            ),
          ),
        ),
      ),
    );
  }
}

class _AuthCard extends StatelessWidget {
  const _AuthCard({required this.child});

  final Widget child;

  @override
  Widget build(BuildContext context) {
    final dark = Theme.of(context).brightness == Brightness.dark;
    return Container(
      padding: const EdgeInsets.fromLTRB(22, 24, 22, 20),
      decoration: BoxDecoration(
        color: Theme.of(
          context,
        ).cardColor.withValues(alpha: dark ? 0.86 : 0.92),
        borderRadius: BorderRadius.circular(32),
        border: Border.all(
          color: Theme.of(
            context,
          ).colorScheme.outlineVariant.withValues(alpha: 0.55),
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: dark ? 0.28 : 0.08),
            blurRadius: 32,
            offset: const Offset(0, 18),
          ),
        ],
      ),
      child: child,
    );
  }
}

class _MobileHero extends StatelessWidget {
  const _MobileHero({required this.title, required this.subtitle});

  final String title;
  final String subtitle;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 174,
      child: Stack(
        fit: StackFit.expand,
        children: [
          const _TravelImage(radius: 30),
          DecoratedBox(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(30),
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  Colors.black.withValues(alpha: 0.05),
                  Colors.black.withValues(alpha: 0.64),
                ],
              ),
            ),
          ),
          Positioned(
            left: 18,
            right: 18,
            bottom: 18,
            child: _PreviewCopy(
              title: title,
              subtitle: subtitle,
              compact: true,
            ),
          ),
        ],
      ),
    );
  }
}

class _TravelPreview extends StatelessWidget {
  const _TravelPreview({required this.title, required this.subtitle});

  final String title;
  final String subtitle;

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 0.82,
      child: Stack(
        fit: StackFit.expand,
        children: [
          const _TravelImage(radius: 40),
          DecoratedBox(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(40),
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  Colors.black.withValues(alpha: 0.08),
                  Colors.black.withValues(alpha: 0.68),
                ],
              ),
            ),
          ),
          Positioned(
            left: 28,
            right: 28,
            bottom: 30,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const _TrustBadge(),
                const SizedBox(height: 18),
                _PreviewCopy(title: title, subtitle: subtitle),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _TravelImage extends StatelessWidget {
  const _TravelImage({required this.radius});

  final double radius;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(radius),
      child: Image.network(
        'https://images.unsplash.com/photo-1546708973-b339540b5162?auto=format&fit=crop&w=1000&q=80',
        fit: BoxFit.cover,
        errorBuilder: (context, error, stackTrace) => Container(
          color: XploreColors.cream,
          alignment: Alignment.center,
          child: const Icon(Icons.landscape_rounded, size: 56),
        ),
      ),
    );
  }
}

class _TrustBadge extends StatelessWidget {
  const _TrustBadge();

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.88),
        borderRadius: BorderRadius.circular(999),
      ),
      child: const Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(Icons.star_rounded, color: XploreColors.cinnamon, size: 16),
          SizedBox(width: 6),
          Text(
            'Trusted across Sri Lanka',
            style: TextStyle(fontWeight: FontWeight.w800, fontSize: 12),
          ),
        ],
      ),
    );
  }
}

class _PreviewCopy extends StatelessWidget {
  const _PreviewCopy({
    required this.title,
    required this.subtitle,
    this.compact = false,
  });

  final String title;
  final String subtitle;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: TextStyle(
            color: Colors.white,
            fontSize: compact ? 24 : 34,
            height: 1.06,
            fontWeight: FontWeight.w800,
          ),
        ),
        const SizedBox(height: 8),
        Text(
          subtitle,
          maxLines: compact ? 2 : 3,
          overflow: TextOverflow.ellipsis,
          style: TextStyle(
            color: Colors.white.withValues(alpha: 0.86),
            fontSize: compact ? 12 : 14,
            height: 1.35,
            fontWeight: FontWeight.w500,
          ),
        ),
      ],
    );
  }
}
