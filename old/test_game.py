import pygame
import sys
import math

# Initialize Pygame
pygame.init()

# Screen settings
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Breakdancing Animation")
clock = pygame.time.Clock()

# Colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)
BLUE = (0, 0, 255)
GREEN = (0, 255, 0)
BROWN = (139, 69, 19)
LIGHT_BLUE = (135, 206, 250)

# Stick figure settings
stick_figure = {
    "head_pos": (400, 300),
    "body_length": 100,
    "arm_length": 60,
    "leg_length": 80,
}

# Animation variables
angle = 0
speed = 0.1
spin_angle = 0
spin_speed = 0.15


# Function to draw the floor
def draw_floor(surface):
    pygame.draw.rect(surface, BROWN, (0, HEIGHT - 100, WIDTH, 100))
    for i in range(0, WIDTH, 100):
        pygame.draw.rect(surface, BLACK, (i, HEIGHT - 100, 100, 5))  # Floor planks


# Function to draw the sky
def draw_sky(surface):
    surface.fill(LIGHT_BLUE)
    pygame.draw.circle(surface, WHITE, (700, 100), 50)  # Sun


# Function to draw stick figure
def draw_stick_figure(surface, x, y, angle, spin):
    # Apply spin transformation for breakdancing
    head_pos = (x + int(math.cos(spin) * 30), y + int(math.sin(spin) * 30))
    body_end = (x, y + stick_figure["body_length"])

    # Arms spinning around
    arm_offset = int(math.sin(angle) * stick_figure["arm_length"] / 2)
    left_arm = (x - stick_figure["arm_length"] + arm_offset, y + 30)
    right_arm = (x + stick_figure["arm_length"] - arm_offset, y + 30)

    # Legs spinning alternately
    leg_offset = int(math.cos(angle) * stick_figure["leg_length"] / 2)
    left_leg = (
        x - 20,
        y + stick_figure["body_length"] + stick_figure["leg_length"] + leg_offset,
    )
    right_leg = (
        x + 20,
        y + stick_figure["body_length"] + stick_figure["leg_length"] - leg_offset,
    )

    # Draw head
    pygame.draw.circle(surface, BLUE, head_pos, 20)

    # Draw body
    pygame.draw.line(surface, BLACK, head_pos, body_end, 5)

    # Draw arms
    pygame.draw.line(surface, RED, (x, y + 30), left_arm, 5)
    pygame.draw.line(surface, RED, (x, y + 30), right_arm, 5)

    # Draw legs
    pygame.draw.line(surface, BLACK, body_end, left_leg, 5)
    pygame.draw.line(surface, BLACK, body_end, right_leg, 5)


# Main loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Update animation
    angle += speed
    spin_angle += spin_speed

    # Draw background
    draw_sky(screen)
    draw_floor(screen)

    # Draw stick figure
    draw_stick_figure(
        screen,
        stick_figure["head_pos"][0],
        stick_figure["head_pos"][1],
        angle,
        spin_angle,
    )

    # Update display
    pygame.display.flip()

    # Cap the frame rate
    clock.tick(60)

# Quit Pygame
pygame.quit()
sys.exit()
