import Button from '@pluralsight/ps-design-system-button/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import React from 'react'

import { Code, Example, Heading, Link, P } from '../../common/components'

import Card from '@pluralsight/ps-design-system-card/react'

const defaultCard = (
  <Card
    title={'The Card Title'}
    image={<img src="http://via.placeholder.com/350x150" />}
  />
)

export default _ =>
  <div>
    <Heading size="xx-large">
      <h1>Card</h1>
    </Heading>

    <P>Install the component dependency:</P>
    <Code language="bash">
      npm install @pluralsight/ps-design-system-card --save-dev
    </Code>

    <P>Include a React component in your project:</P>
    <Code language="javascript">
      import Card from '@pluralsight/ps-design-system-card/react'
    </Code>

    <Heading size="large">
      <h2>Size</h2>
    </Heading>
    <Example.React
      component={defaultCard}
      orient="vertical"
      name="Card"
      permutations={[{ size: 'large' }, { size: 'medium' }, { size: 'small' }]}
    />

    <Heading size="large">
      <h2>Image</h2>
    </Heading>
    <P>
      The image will cover the space given. This space is variable width but set
      height according to the `size` property.
    </P>
    <Example.React
      component={<Card image={<img />} title="fake" />}
      orient="vertical"
      name="Card"
      permutations={[
        {
          size: 'medium',
          image: <img src="http://via.placeholder.com/350x150" />,
          title: 'Wide image'
        },
        {
          size: 'medium',
          image: <img src="http://via.placeholder.com/200x400" />,
          title: 'Tall image'
        }
      ]}
    />

    <Heading size="large">
      <h2>Progress</h2>
    </Heading>
    <Example.React
      component={defaultCard}
      orient="vertical"
      name="Card"
      permutations={[
        { progress: 25 },
        { progress: 66.666667 },
        { progress: 100 }
      ]}
    />

    <Heading size="large">
      <h2>Title</h2>
    </Heading>
    <P>
      The title can be a string or a some other element, such as a link, that
      contains a string
    </P>
    <P>
      Strings are line-clamped to 2 lines max, then the text will overflow with
      an ellipsis appended.
    </P>
    <Example.React
      component={defaultCard}
      name="Card"
      orient="vertical"
      permutations={[
        { title: 'String Title' },
        {
          title: <a>Link Title</a>
        },
        {
          title:
            'Super Long Title of the Technology of the Century as Brought to You By Tech Groupsoft in the Stunning Desert of British Lithuania'
        }
      ]}
    />

    <Heading size="large">
      <h2>Metadata</h2>
    </Heading>
    <Example.React
      component={defaultCard}
      name="Card"
      orient="vertical"
      permutations={[
        { metadata1: ['Simon Allardice'] },
        {
          metadata1: ['Simon Allardice'],
          metadata2: ['Intermediate', '2hr 20min', 'July 24, 1847']
        },
        {
          metadata1: [
            <a>The Honorable Simon Allardice Hailing From Shores Abroad</a>
          ],
          metadata2: [
            'Only about the Best Level in the World for Learning',
            '2hr 20min or longer depending',
            "July 24, 1847 or year thereabouts, it's unclear"
          ]
        }
      ]}
    />

    <Heading size="large">
      <h2>Action Bar</h2>
    </Heading>
    <Example.React
      component={defaultCard}
      orient="vertical"
      name="Card"
      permutations={[
        {
          actionBar: [
            <Button appearance="flat" icon={<Icon id="bookmark" />} />
          ]
        },
        {
          actionBar: [
            <Button appearance="flat" icon={<Icon id="bookmark" />} />,
            <Button appearance="flat" icon={<Icon id="more" />} />
          ]
        },
        {
          actionBar: [
            <Button appearance="flat" icon={<Icon id="bookmark" />} />,
            <Button appearance="flat" icon={<Icon id="more" />} />
          ],
          actionBarVisible: true
        }
      ]}
    />

    <Heading size="large">
      <h2>Tag</h2>
    </Heading>
    <Example.React
      component={defaultCard}
      orient="vertical"
      name="Card"
      permutations={[
        {
          tag: [<Icon id="logo" />, <span>Course</span>]
        },
        {
          tag: [<span>Channel</span>]
        },
        {
          size: 'small',
          tag: [<Icon id="logo" />, <span>Course</span>]
        }
      ]}
    />

    <Heading size="large">
      <h2>Full Overlay</h2>
    </Heading>
    <Example.React
      component={defaultCard}
      orient="vertical"
      name="Card"
      permutations={[
        {
          fullOverlay: <div>Play</div>
        },
        {
          actionBar: [
            <Button appearance="flat" icon={<Icon id="bookmark" />} />
          ],
          fullOverlay: <a>Custom Thing</a>,
          tag: [<Icon id="logo" />, <span>Course</span>]
        },
        {
          fullOverlay: <div>Play</div>,
          fullOverlayVisible: true
        }
      ]}
    />

    <Heading size="large">
      <h2>Bonus Bar</h2>
    </Heading>
    <Example.React
      component={defaultCard}
      name="Card"
      permutations={[
        {
          bonusBar: <div>Just bonus</div>
        }
      ]}
    />
  </div>
